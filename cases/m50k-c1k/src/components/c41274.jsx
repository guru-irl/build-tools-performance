import React from 'react';
const LABEL_41274 = 'component_41274';
export function Component41274({ value = 41274, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41274, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41274, 'data-value': derived.doubled }, children);
}
export default Component41274;
