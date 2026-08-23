import React from 'react';
const LABEL_41786 = 'component_41786';
export function Component41786({ value = 41786, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41786, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41786, 'data-value': derived.doubled }, children);
}
export default Component41786;
