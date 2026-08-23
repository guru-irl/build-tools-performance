import React from 'react';
const LABEL_27728 = 'component_27728';
export function Component27728({ value = 27728, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27728, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27728, 'data-value': derived.doubled }, children);
}
export default Component27728;
