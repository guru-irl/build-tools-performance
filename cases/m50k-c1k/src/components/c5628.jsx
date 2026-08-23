import React from 'react';
const LABEL_5628 = 'component_5628';
export function Component5628({ value = 5628, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5628, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5628, 'data-value': derived.doubled }, children);
}
export default Component5628;
