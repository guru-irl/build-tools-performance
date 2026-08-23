import React from 'react';
const LABEL_42040 = 'component_42040';
export function Component42040({ value = 42040, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42040, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42040, 'data-value': derived.doubled }, children);
}
export default Component42040;
