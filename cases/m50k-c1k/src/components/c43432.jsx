import React from 'react';
const LABEL_43432 = 'component_43432';
export function Component43432({ value = 43432, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43432, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43432, 'data-value': derived.doubled }, children);
}
export default Component43432;
