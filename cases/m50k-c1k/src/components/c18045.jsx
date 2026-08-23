import React from 'react';
const LABEL_18045 = 'component_18045';
export function Component18045({ value = 18045, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18045, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18045, 'data-value': derived.doubled }, children);
}
export default Component18045;
