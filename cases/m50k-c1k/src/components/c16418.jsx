import React from 'react';
const LABEL_16418 = 'component_16418';
export function Component16418({ value = 16418, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16418, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16418, 'data-value': derived.doubled }, children);
}
export default Component16418;
