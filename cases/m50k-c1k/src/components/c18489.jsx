import React from 'react';
const LABEL_18489 = 'component_18489';
export function Component18489({ value = 18489, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18489, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18489, 'data-value': derived.doubled }, children);
}
export default Component18489;
