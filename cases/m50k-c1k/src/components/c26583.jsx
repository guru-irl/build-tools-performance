import React from 'react';
const LABEL_26583 = 'component_26583';
export function Component26583({ value = 26583, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26583, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26583, 'data-value': derived.doubled }, children);
}
export default Component26583;
