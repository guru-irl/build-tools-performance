import React from 'react';
const LABEL_8418 = 'component_8418';
export function Component8418({ value = 8418, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8418, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8418, 'data-value': derived.doubled }, children);
}
export default Component8418;
