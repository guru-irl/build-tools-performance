import React from 'react';
const LABEL_16260 = 'component_16260';
export function Component16260({ value = 16260, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16260, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16260, 'data-value': derived.doubled }, children);
}
export default Component16260;
