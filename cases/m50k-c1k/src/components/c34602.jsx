import React from 'react';
const LABEL_34602 = 'component_34602';
export function Component34602({ value = 34602, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34602, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34602, 'data-value': derived.doubled }, children);
}
export default Component34602;
