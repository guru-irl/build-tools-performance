import React from 'react';
const LABEL_31488 = 'component_31488';
export function Component31488({ value = 31488, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_31488, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_31488, 'data-value': derived.doubled }, children);
}
export default Component31488;
