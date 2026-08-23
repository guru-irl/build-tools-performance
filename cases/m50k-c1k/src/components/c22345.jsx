import React from 'react';
const LABEL_22345 = 'component_22345';
export function Component22345({ value = 22345, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22345, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22345, 'data-value': derived.doubled }, children);
}
export default Component22345;
