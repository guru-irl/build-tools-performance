import React from 'react';
const LABEL_10748 = 'component_10748';
export function Component10748({ value = 10748, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10748, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10748, 'data-value': derived.doubled }, children);
}
export default Component10748;
