import React from 'react';
const LABEL_36215 = 'component_36215';
export function Component36215({ value = 36215, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36215, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36215, 'data-value': derived.doubled }, children);
}
export default Component36215;
