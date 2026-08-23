import React from 'react';
const LABEL_38378 = 'component_38378';
export function Component38378({ value = 38378, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38378, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38378, 'data-value': derived.doubled }, children);
}
export default Component38378;
