import React from 'react';
const LABEL_34910 = 'component_34910';
export function Component34910({ value = 34910, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34910, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34910, 'data-value': derived.doubled }, children);
}
export default Component34910;
