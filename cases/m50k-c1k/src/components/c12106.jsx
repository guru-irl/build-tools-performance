import React from 'react';
const LABEL_12106 = 'component_12106';
export function Component12106({ value = 12106, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12106, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12106, 'data-value': derived.doubled }, children);
}
export default Component12106;
