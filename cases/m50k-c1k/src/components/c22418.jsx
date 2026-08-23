import React from 'react';
const LABEL_22418 = 'component_22418';
export function Component22418({ value = 22418, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22418, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22418, 'data-value': derived.doubled }, children);
}
export default Component22418;
