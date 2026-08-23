import React from 'react';
const LABEL_22908 = 'component_22908';
export function Component22908({ value = 22908, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22908, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22908, 'data-value': derived.doubled }, children);
}
export default Component22908;
