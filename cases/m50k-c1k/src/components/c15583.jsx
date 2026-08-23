import React from 'react';
const LABEL_15583 = 'component_15583';
export function Component15583({ value = 15583, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15583, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15583, 'data-value': derived.doubled }, children);
}
export default Component15583;
