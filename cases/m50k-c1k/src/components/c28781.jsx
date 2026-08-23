import React from 'react';
const LABEL_28781 = 'component_28781';
export function Component28781({ value = 28781, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28781, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28781, 'data-value': derived.doubled }, children);
}
export default Component28781;
