import React from 'react';
const LABEL_15061 = 'component_15061';
export function Component15061({ value = 15061, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15061, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15061, 'data-value': derived.doubled }, children);
}
export default Component15061;
