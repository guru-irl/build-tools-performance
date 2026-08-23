import React from 'react';
const LABEL_16602 = 'component_16602';
export function Component16602({ value = 16602, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16602, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16602, 'data-value': derived.doubled }, children);
}
export default Component16602;
