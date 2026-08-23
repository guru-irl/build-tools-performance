import React from 'react';
const LABEL_8953 = 'component_8953';
export function Component8953({ value = 8953, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8953, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8953, 'data-value': derived.doubled }, children);
}
export default Component8953;
