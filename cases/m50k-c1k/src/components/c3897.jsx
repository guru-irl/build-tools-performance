import React from 'react';
const LABEL_3897 = 'component_3897';
export function Component3897({ value = 3897, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3897, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3897, 'data-value': derived.doubled }, children);
}
export default Component3897;
