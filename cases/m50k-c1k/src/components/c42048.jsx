import React from 'react';
const LABEL_42048 = 'component_42048';
export function Component42048({ value = 42048, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42048, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42048, 'data-value': derived.doubled }, children);
}
export default Component42048;
