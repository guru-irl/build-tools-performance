import React from 'react';
const LABEL_2107 = 'component_2107';
export function Component2107({ value = 2107, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2107, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2107, 'data-value': derived.doubled }, children);
}
export default Component2107;
