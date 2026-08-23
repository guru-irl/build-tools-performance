import React from 'react';
const LABEL_42242 = 'component_42242';
export function Component42242({ value = 42242, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42242, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42242, 'data-value': derived.doubled }, children);
}
export default Component42242;
