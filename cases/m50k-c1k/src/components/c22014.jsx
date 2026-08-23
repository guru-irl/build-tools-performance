import React from 'react';
const LABEL_22014 = 'component_22014';
export function Component22014({ value = 22014, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22014, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22014, 'data-value': derived.doubled }, children);
}
export default Component22014;
