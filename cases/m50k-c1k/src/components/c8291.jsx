import React from 'react';
const LABEL_8291 = 'component_8291';
export function Component8291({ value = 8291, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8291, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8291, 'data-value': derived.doubled }, children);
}
export default Component8291;
