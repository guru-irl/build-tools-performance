import React from 'react';
const LABEL_26291 = 'component_26291';
export function Component26291({ value = 26291, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26291, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26291, 'data-value': derived.doubled }, children);
}
export default Component26291;
