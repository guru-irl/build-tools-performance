import React from 'react';
const LABEL_43697 = 'component_43697';
export function Component43697({ value = 43697, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43697, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43697, 'data-value': derived.doubled }, children);
}
export default Component43697;
