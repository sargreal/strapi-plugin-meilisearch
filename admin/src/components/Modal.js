import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { Modal, ModalHeader, ModalFooter } from 'strapi-helper-plugin'
import { Button, Text, Padded } from '@buffetjs/core'

const ConditionsModal = ({
  title,
  body,
  headerBreadCrumbs,
  // initialConditions,
  isOpen,
  onClosed,
  onSubmit,
  onToggle
}) => {
  // const [conditions, setConditions] = useState(initialConditions)

  // const handleSelectChange = (action, conditions) => {
  //   setConditions(prev => ({
  //     ...prev,
  //     [action]: conditions
  //   }))
  // }

  const handleSubmit = () => {
    onSubmit()
    onToggle()
  }

  return (
      <Modal withoverflow="true" onClosed={onClosed} isOpen={isOpen} onToggle={onToggle}>
          <ModalHeader headerBreadcrumbs={headerBreadCrumbs} />
          <Padded top left right bottom size="md">
              <Text fontSize="lg" fontWeight="bold">
                  {title}
              </Text>
              <Text fontSize="md">
                  {body}
              </Text>
          </Padded>
          <ModalFooter>
              <section>
                  <Button type="button" color="cancel" onClick={onToggle}>
                      {'Wesh Footer'}
                  </Button>

                  <Button type="button" color="success" onClick={handleSubmit}>
                      {'Wesh footer 2'}
                  </Button>
              </section>
          </ModalFooter>
      </Modal>
  )
}

ConditionsModal.defaultProps = {
  initialConditions: {}
}

ConditionsModal.propTypes = {
  actions: PropTypes.array.isRequired,
  headerBreadCrumbs: PropTypes.arrayOf(PropTypes.string).isRequired,
  initialConditions: PropTypes.object,
  isOpen: PropTypes.bool.isRequired,
  onClosed: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  onToggle: PropTypes.func.isRequired
}
export default ConditionsModal
