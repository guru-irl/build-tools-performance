import React from 'react';
const LABEL_26470 = 'component_26470';
export function Component26470({ value = 26470, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26470, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26470, 'data-value': derived.doubled }, children);
}
export default Component26470;
