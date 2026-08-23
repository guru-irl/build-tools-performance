import React from 'react';
const LABEL_41777 = 'component_41777';
export function Component41777({ value = 41777, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41777, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41777, 'data-value': derived.doubled }, children);
}
export default Component41777;
