import React from 'react';
const LABEL_42781 = 'component_42781';
export function Component42781({ value = 42781, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42781, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42781, 'data-value': derived.doubled }, children);
}
export default Component42781;
