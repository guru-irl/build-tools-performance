import React from 'react';
const LABEL_43032 = 'component_43032';
export function Component43032({ value = 43032, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43032, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43032, 'data-value': derived.doubled }, children);
}
export default Component43032;
