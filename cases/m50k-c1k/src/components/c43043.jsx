import React from 'react';
const LABEL_43043 = 'component_43043';
export function Component43043({ value = 43043, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43043, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43043, 'data-value': derived.doubled }, children);
}
export default Component43043;
