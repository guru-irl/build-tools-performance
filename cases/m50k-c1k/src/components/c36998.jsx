import React from 'react';
const LABEL_36998 = 'component_36998';
export function Component36998({ value = 36998, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36998, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36998, 'data-value': derived.doubled }, children);
}
export default Component36998;
