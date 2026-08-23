import React from 'react';
const LABEL_8244 = 'component_8244';
export function Component8244({ value = 8244, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8244, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8244, 'data-value': derived.doubled }, children);
}
export default Component8244;
