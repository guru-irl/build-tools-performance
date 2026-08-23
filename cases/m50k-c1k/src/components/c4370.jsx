import React from 'react';
const LABEL_4370 = 'component_4370';
export function Component4370({ value = 4370, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4370, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4370, 'data-value': derived.doubled }, children);
}
export default Component4370;
