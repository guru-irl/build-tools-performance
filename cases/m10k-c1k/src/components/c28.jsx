import React from 'react';
const LABEL_28 = 'component_28';
export function Component28({ value = 28, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28, 'data-value': derived.doubled }, children);
}
export default Component28;
