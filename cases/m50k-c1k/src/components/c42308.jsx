import React from 'react';
const LABEL_42308 = 'component_42308';
export function Component42308({ value = 42308, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42308, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42308, 'data-value': derived.doubled }, children);
}
export default Component42308;
