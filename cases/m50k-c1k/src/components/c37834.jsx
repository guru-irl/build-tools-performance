import React from 'react';
const LABEL_37834 = 'component_37834';
export function Component37834({ value = 37834, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37834, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37834, 'data-value': derived.doubled }, children);
}
export default Component37834;
