import React from 'react';
const LABEL_42109 = 'component_42109';
export function Component42109({ value = 42109, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42109, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42109, 'data-value': derived.doubled }, children);
}
export default Component42109;
