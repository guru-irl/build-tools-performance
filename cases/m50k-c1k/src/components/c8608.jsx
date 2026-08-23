import React from 'react';
const LABEL_8608 = 'component_8608';
export function Component8608({ value = 8608, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8608, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8608, 'data-value': derived.doubled }, children);
}
export default Component8608;
