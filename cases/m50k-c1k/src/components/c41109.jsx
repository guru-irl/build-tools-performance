import React from 'react';
const LABEL_41109 = 'component_41109';
export function Component41109({ value = 41109, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41109, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41109, 'data-value': derived.doubled }, children);
}
export default Component41109;
