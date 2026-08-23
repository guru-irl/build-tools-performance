import React from 'react';
const LABEL_37804 = 'component_37804';
export function Component37804({ value = 37804, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37804, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37804, 'data-value': derived.doubled }, children);
}
export default Component37804;
