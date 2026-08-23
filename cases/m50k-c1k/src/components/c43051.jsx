import React from 'react';
const LABEL_43051 = 'component_43051';
export function Component43051({ value = 43051, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43051, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43051, 'data-value': derived.doubled }, children);
}
export default Component43051;
