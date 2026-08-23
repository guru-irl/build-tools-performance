import React from 'react';
const LABEL_44112 = 'component_44112';
export function Component44112({ value = 44112, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44112, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44112, 'data-value': derived.doubled }, children);
}
export default Component44112;
