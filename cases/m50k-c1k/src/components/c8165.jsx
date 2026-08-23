import React from 'react';
const LABEL_8165 = 'component_8165';
export function Component8165({ value = 8165, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8165, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8165, 'data-value': derived.doubled }, children);
}
export default Component8165;
