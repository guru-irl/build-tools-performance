import React from 'react';
const LABEL_11804 = 'component_11804';
export function Component11804({ value = 11804, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11804, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11804, 'data-value': derived.doubled }, children);
}
export default Component11804;
