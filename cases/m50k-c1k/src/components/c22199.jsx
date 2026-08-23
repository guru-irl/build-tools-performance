import React from 'react';
const LABEL_22199 = 'component_22199';
export function Component22199({ value = 22199, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22199, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22199, 'data-value': derived.doubled }, children);
}
export default Component22199;
