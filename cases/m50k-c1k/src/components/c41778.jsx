import React from 'react';
const LABEL_41778 = 'component_41778';
export function Component41778({ value = 41778, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41778, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41778, 'data-value': derived.doubled }, children);
}
export default Component41778;
