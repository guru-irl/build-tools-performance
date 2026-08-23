import React from 'react';
const LABEL_35581 = 'component_35581';
export function Component35581({ value = 35581, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35581, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35581, 'data-value': derived.doubled }, children);
}
export default Component35581;
