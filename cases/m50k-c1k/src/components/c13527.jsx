import React from 'react';
const LABEL_13527 = 'component_13527';
export function Component13527({ value = 13527, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13527, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13527, 'data-value': derived.doubled }, children);
}
export default Component13527;
