import React from 'react';
const LABEL_43570 = 'component_43570';
export function Component43570({ value = 43570, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43570, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43570, 'data-value': derived.doubled }, children);
}
export default Component43570;
