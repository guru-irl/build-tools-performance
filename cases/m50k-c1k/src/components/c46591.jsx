import React from 'react';
const LABEL_46591 = 'component_46591';
export function Component46591({ value = 46591, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46591, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46591, 'data-value': derived.doubled }, children);
}
export default Component46591;
