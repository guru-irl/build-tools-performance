import React from 'react';
const LABEL_43083 = 'component_43083';
export function Component43083({ value = 43083, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43083, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43083, 'data-value': derived.doubled }, children);
}
export default Component43083;
