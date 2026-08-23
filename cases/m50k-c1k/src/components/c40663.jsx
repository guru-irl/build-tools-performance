import React from 'react';
const LABEL_40663 = 'component_40663';
export function Component40663({ value = 40663, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40663, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40663, 'data-value': derived.doubled }, children);
}
export default Component40663;
