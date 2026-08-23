import React from 'react';
const LABEL_45370 = 'component_45370';
export function Component45370({ value = 45370, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45370, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45370, 'data-value': derived.doubled }, children);
}
export default Component45370;
