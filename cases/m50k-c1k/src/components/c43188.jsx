import React from 'react';
const LABEL_43188 = 'component_43188';
export function Component43188({ value = 43188, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43188, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43188, 'data-value': derived.doubled }, children);
}
export default Component43188;
