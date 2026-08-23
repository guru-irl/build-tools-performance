import React from 'react';
const LABEL_20748 = 'component_20748';
export function Component20748({ value = 20748, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20748, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20748, 'data-value': derived.doubled }, children);
}
export default Component20748;
