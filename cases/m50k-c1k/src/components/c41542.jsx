import React from 'react';
const LABEL_41542 = 'component_41542';
export function Component41542({ value = 41542, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41542, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41542, 'data-value': derived.doubled }, children);
}
export default Component41542;
