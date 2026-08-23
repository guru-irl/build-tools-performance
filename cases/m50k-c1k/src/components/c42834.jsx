import React from 'react';
const LABEL_42834 = 'component_42834';
export function Component42834({ value = 42834, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42834, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42834, 'data-value': derived.doubled }, children);
}
export default Component42834;
