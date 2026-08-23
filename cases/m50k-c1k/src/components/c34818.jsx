import React from 'react';
const LABEL_34818 = 'component_34818';
export function Component34818({ value = 34818, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34818, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34818, 'data-value': derived.doubled }, children);
}
export default Component34818;
