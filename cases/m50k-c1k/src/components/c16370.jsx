import React from 'react';
const LABEL_16370 = 'component_16370';
export function Component16370({ value = 16370, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16370, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16370, 'data-value': derived.doubled }, children);
}
export default Component16370;
