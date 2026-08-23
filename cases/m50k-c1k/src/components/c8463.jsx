import React from 'react';
const LABEL_8463 = 'component_8463';
export function Component8463({ value = 8463, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8463, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8463, 'data-value': derived.doubled }, children);
}
export default Component8463;
