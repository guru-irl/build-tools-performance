import React from 'react';
const LABEL_7804 = 'component_7804';
export function Component7804({ value = 7804, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7804, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7804, 'data-value': derived.doubled }, children);
}
export default Component7804;
