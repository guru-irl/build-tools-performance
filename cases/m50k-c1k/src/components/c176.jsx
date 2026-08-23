import React from 'react';
const LABEL_176 = 'component_176';
export function Component176({ value = 176, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_176, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_176, 'data-value': derived.doubled }, children);
}
export default Component176;
