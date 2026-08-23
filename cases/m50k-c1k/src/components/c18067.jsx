import React from 'react';
const LABEL_18067 = 'component_18067';
export function Component18067({ value = 18067, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18067, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18067, 'data-value': derived.doubled }, children);
}
export default Component18067;
