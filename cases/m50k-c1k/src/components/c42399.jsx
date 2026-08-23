import React from 'react';
const LABEL_42399 = 'component_42399';
export function Component42399({ value = 42399, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42399, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42399, 'data-value': derived.doubled }, children);
}
export default Component42399;
