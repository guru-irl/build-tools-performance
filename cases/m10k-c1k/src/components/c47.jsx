import React from 'react';
const LABEL_47 = 'component_47';
export function Component47({ value = 47, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_47, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_47, 'data-value': derived.doubled }, children);
}
export default Component47;
