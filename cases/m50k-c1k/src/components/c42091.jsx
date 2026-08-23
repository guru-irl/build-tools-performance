import React from 'react';
const LABEL_42091 = 'component_42091';
export function Component42091({ value = 42091, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42091, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42091, 'data-value': derived.doubled }, children);
}
export default Component42091;
