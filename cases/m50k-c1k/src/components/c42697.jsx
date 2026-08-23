import React from 'react';
const LABEL_42697 = 'component_42697';
export function Component42697({ value = 42697, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42697, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42697, 'data-value': derived.doubled }, children);
}
export default Component42697;
