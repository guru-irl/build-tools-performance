import React from 'react';
const LABEL_42072 = 'component_42072';
export function Component42072({ value = 42072, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42072, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42072, 'data-value': derived.doubled }, children);
}
export default Component42072;
