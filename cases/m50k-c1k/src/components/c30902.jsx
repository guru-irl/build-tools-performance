import React from 'react';
const LABEL_30902 = 'component_30902';
export function Component30902({ value = 30902, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30902, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30902, 'data-value': derived.doubled }, children);
}
export default Component30902;
