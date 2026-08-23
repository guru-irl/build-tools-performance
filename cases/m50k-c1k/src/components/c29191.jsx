import React from 'react';
const LABEL_29191 = 'component_29191';
export function Component29191({ value = 29191, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29191, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29191, 'data-value': derived.doubled }, children);
}
export default Component29191;
