import React from 'react';
const LABEL_8973 = 'component_8973';
export function Component8973({ value = 8973, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8973, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8973, 'data-value': derived.doubled }, children);
}
export default Component8973;
