import React from 'react';
const LABEL_36794 = 'component_36794';
export function Component36794({ value = 36794, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36794, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36794, 'data-value': derived.doubled }, children);
}
export default Component36794;
