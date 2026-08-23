import React from 'react';
const LABEL_44581 = 'component_44581';
export function Component44581({ value = 44581, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44581, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44581, 'data-value': derived.doubled }, children);
}
export default Component44581;
