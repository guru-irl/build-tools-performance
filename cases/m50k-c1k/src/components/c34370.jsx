import React from 'react';
const LABEL_34370 = 'component_34370';
export function Component34370({ value = 34370, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34370, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34370, 'data-value': derived.doubled }, children);
}
export default Component34370;
