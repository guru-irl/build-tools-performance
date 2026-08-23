import React from 'react';
const LABEL_36818 = 'component_36818';
export function Component36818({ value = 36818, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36818, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36818, 'data-value': derived.doubled }, children);
}
export default Component36818;
