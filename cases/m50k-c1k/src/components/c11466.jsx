import React from 'react';
const LABEL_11466 = 'component_11466';
export function Component11466({ value = 11466, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11466, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11466, 'data-value': derived.doubled }, children);
}
export default Component11466;
