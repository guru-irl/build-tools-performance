import React from 'react';
const LABEL_31634 = 'component_31634';
export function Component31634({ value = 31634, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_31634, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_31634, 'data-value': derived.doubled }, children);
}
export default Component31634;
