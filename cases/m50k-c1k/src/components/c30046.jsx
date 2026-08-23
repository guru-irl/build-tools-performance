import React from 'react';
const LABEL_30046 = 'component_30046';
export function Component30046({ value = 30046, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30046, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30046, 'data-value': derived.doubled }, children);
}
export default Component30046;
