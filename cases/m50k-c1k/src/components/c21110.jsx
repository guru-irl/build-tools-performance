import React from 'react';
const LABEL_21110 = 'component_21110';
export function Component21110({ value = 21110, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21110, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21110, 'data-value': derived.doubled }, children);
}
export default Component21110;
