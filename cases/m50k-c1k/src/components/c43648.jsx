import React from 'react';
const LABEL_43648 = 'component_43648';
export function Component43648({ value = 43648, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43648, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43648, 'data-value': derived.doubled }, children);
}
export default Component43648;
