import React from 'react';
const LABEL_42106 = 'component_42106';
export function Component42106({ value = 42106, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42106, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42106, 'data-value': derived.doubled }, children);
}
export default Component42106;
