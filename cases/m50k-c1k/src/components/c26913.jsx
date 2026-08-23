import React from 'react';
const LABEL_26913 = 'component_26913';
export function Component26913({ value = 26913, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26913, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26913, 'data-value': derived.doubled }, children);
}
export default Component26913;
