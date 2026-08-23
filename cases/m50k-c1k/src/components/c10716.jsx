import React from 'react';
const LABEL_10716 = 'component_10716';
export function Component10716({ value = 10716, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10716, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10716, 'data-value': derived.doubled }, children);
}
export default Component10716;
