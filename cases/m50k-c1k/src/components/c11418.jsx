import React from 'react';
const LABEL_11418 = 'component_11418';
export function Component11418({ value = 11418, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11418, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11418, 'data-value': derived.doubled }, children);
}
export default Component11418;
