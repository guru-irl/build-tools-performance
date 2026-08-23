import React from 'react';
const LABEL_26415 = 'component_26415';
export function Component26415({ value = 26415, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26415, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26415, 'data-value': derived.doubled }, children);
}
export default Component26415;
