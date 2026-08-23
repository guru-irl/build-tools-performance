import React from 'react';
const LABEL_40012 = 'component_40012';
export function Component40012({ value = 40012, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40012, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40012, 'data-value': derived.doubled }, children);
}
export default Component40012;
