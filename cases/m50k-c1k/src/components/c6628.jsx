import React from 'react';
const LABEL_6628 = 'component_6628';
export function Component6628({ value = 6628, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6628, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6628, 'data-value': derived.doubled }, children);
}
export default Component6628;
