import React from 'react';
const LABEL_38591 = 'component_38591';
export function Component38591({ value = 38591, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38591, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38591, 'data-value': derived.doubled }, children);
}
export default Component38591;
