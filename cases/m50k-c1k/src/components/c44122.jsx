import React from 'react';
const LABEL_44122 = 'component_44122';
export function Component44122({ value = 44122, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44122, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44122, 'data-value': derived.doubled }, children);
}
export default Component44122;
