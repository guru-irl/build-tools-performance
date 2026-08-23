import React from 'react';
const LABEL_41174 = 'component_41174';
export function Component41174({ value = 41174, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41174, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41174, 'data-value': derived.doubled }, children);
}
export default Component41174;
