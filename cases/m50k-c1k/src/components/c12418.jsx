import React from 'react';
const LABEL_12418 = 'component_12418';
export function Component12418({ value = 12418, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12418, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12418, 'data-value': derived.doubled }, children);
}
export default Component12418;
