import React from 'react';
const LABEL_40722 = 'component_40722';
export function Component40722({ value = 40722, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40722, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40722, 'data-value': derived.doubled }, children);
}
export default Component40722;
