import React from 'react';
const LABEL_43443 = 'component_43443';
export function Component43443({ value = 43443, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43443, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43443, 'data-value': derived.doubled }, children);
}
export default Component43443;
