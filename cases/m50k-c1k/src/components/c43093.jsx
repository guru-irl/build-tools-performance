import React from 'react';
const LABEL_43093 = 'component_43093';
export function Component43093({ value = 43093, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43093, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43093, 'data-value': derived.doubled }, children);
}
export default Component43093;
