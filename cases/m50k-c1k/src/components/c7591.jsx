import React from 'react';
const LABEL_7591 = 'component_7591';
export function Component7591({ value = 7591, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7591, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7591, 'data-value': derived.doubled }, children);
}
export default Component7591;
