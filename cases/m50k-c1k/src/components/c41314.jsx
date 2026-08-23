import React from 'react';
const LABEL_41314 = 'component_41314';
export function Component41314({ value = 41314, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41314, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41314, 'data-value': derived.doubled }, children);
}
export default Component41314;
