import React from 'react';
const LABEL_27335 = 'component_27335';
export function Component27335({ value = 27335, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27335, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27335, 'data-value': derived.doubled }, children);
}
export default Component27335;
