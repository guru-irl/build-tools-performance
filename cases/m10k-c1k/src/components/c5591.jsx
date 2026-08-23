import React from 'react';
const LABEL_5591 = 'component_5591';
export function Component5591({ value = 5591, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5591, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5591, 'data-value': derived.doubled }, children);
}
export default Component5591;
