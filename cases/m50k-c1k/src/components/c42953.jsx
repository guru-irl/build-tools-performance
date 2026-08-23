import React from 'react';
const LABEL_42953 = 'component_42953';
export function Component42953({ value = 42953, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42953, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42953, 'data-value': derived.doubled }, children);
}
export default Component42953;
