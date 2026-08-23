import React from 'react';
const LABEL_19628 = 'component_19628';
export function Component19628({ value = 19628, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19628, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19628, 'data-value': derived.doubled }, children);
}
export default Component19628;
