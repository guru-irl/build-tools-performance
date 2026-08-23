import React from 'react';
const LABEL_28969 = 'component_28969';
export function Component28969({ value = 28969, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28969, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28969, 'data-value': derived.doubled }, children);
}
export default Component28969;
