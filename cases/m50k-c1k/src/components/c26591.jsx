import React from 'react';
const LABEL_26591 = 'component_26591';
export function Component26591({ value = 26591, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26591, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26591, 'data-value': derived.doubled }, children);
}
export default Component26591;
