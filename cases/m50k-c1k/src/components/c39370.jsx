import React from 'react';
const LABEL_39370 = 'component_39370';
export function Component39370({ value = 39370, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39370, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39370, 'data-value': derived.doubled }, children);
}
export default Component39370;
