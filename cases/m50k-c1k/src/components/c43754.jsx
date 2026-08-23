import React from 'react';
const LABEL_43754 = 'component_43754';
export function Component43754({ value = 43754, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43754, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43754, 'data-value': derived.doubled }, children);
}
export default Component43754;
