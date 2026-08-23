import React from 'react';
const LABEL_489 = 'component_489';
export function Component489({ value = 489, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_489, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_489, 'data-value': derived.doubled }, children);
}
export default Component489;
