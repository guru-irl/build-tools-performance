import React from 'react';
const LABEL_38248 = 'component_38248';
export function Component38248({ value = 38248, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38248, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38248, 'data-value': derived.doubled }, children);
}
export default Component38248;
