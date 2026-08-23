import React from 'react';
const LABEL_44897 = 'component_44897';
export function Component44897({ value = 44897, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44897, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44897, 'data-value': derived.doubled }, children);
}
export default Component44897;
