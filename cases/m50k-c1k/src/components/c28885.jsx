import React from 'react';
const LABEL_28885 = 'component_28885';
export function Component28885({ value = 28885, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28885, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28885, 'data-value': derived.doubled }, children);
}
export default Component28885;
