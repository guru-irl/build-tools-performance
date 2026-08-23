import React from 'react';
const LABEL_43429 = 'component_43429';
export function Component43429({ value = 43429, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43429, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43429, 'data-value': derived.doubled }, children);
}
export default Component43429;
