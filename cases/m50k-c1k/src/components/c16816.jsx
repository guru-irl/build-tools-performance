import React from 'react';
const LABEL_16816 = 'component_16816';
export function Component16816({ value = 16816, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16816, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16816, 'data-value': derived.doubled }, children);
}
export default Component16816;
