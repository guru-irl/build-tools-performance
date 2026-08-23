import React from 'react';
const LABEL_28953 = 'component_28953';
export function Component28953({ value = 28953, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28953, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28953, 'data-value': derived.doubled }, children);
}
export default Component28953;
