import React from 'react';
const LABEL_43362 = 'component_43362';
export function Component43362({ value = 43362, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43362, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43362, 'data-value': derived.doubled }, children);
}
export default Component43362;
