import React from 'react';
const LABEL_34832 = 'component_34832';
export function Component34832({ value = 34832, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34832, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34832, 'data-value': derived.doubled }, children);
}
export default Component34832;
