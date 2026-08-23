import React from 'react';
const LABEL_14165 = 'component_14165';
export function Component14165({ value = 14165, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14165, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14165, 'data-value': derived.doubled }, children);
}
export default Component14165;
