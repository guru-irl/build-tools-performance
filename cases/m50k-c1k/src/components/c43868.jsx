import React from 'react';
const LABEL_43868 = 'component_43868';
export function Component43868({ value = 43868, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43868, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43868, 'data-value': derived.doubled }, children);
}
export default Component43868;
