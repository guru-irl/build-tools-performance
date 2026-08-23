import React from 'react';
const LABEL_32418 = 'component_32418';
export function Component32418({ value = 32418, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32418, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32418, 'data-value': derived.doubled }, children);
}
export default Component32418;
