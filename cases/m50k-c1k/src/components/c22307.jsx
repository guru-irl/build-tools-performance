import React from 'react';
const LABEL_22307 = 'component_22307';
export function Component22307({ value = 22307, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22307, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22307, 'data-value': derived.doubled }, children);
}
export default Component22307;
