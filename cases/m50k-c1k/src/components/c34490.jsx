import React from 'react';
const LABEL_34490 = 'component_34490';
export function Component34490({ value = 34490, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34490, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34490, 'data-value': derived.doubled }, children);
}
export default Component34490;
