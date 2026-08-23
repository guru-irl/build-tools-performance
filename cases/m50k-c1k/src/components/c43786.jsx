import React from 'react';
const LABEL_43786 = 'component_43786';
export function Component43786({ value = 43786, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43786, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43786, 'data-value': derived.doubled }, children);
}
export default Component43786;
