import React from 'react';
const LABEL_26074 = 'component_26074';
export function Component26074({ value = 26074, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26074, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26074, 'data-value': derived.doubled }, children);
}
export default Component26074;
