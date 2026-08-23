import React from 'react';
const LABEL_21814 = 'component_21814';
export function Component21814({ value = 21814, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21814, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21814, 'data-value': derived.doubled }, children);
}
export default Component21814;
