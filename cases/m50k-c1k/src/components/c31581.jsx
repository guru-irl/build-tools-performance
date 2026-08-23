import React from 'react';
const LABEL_31581 = 'component_31581';
export function Component31581({ value = 31581, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_31581, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_31581, 'data-value': derived.doubled }, children);
}
export default Component31581;
