import React from 'react';
const LABEL_43406 = 'component_43406';
export function Component43406({ value = 43406, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43406, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43406, 'data-value': derived.doubled }, children);
}
export default Component43406;
