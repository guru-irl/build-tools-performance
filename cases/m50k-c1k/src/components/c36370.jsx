import React from 'react';
const LABEL_36370 = 'component_36370';
export function Component36370({ value = 36370, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36370, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36370, 'data-value': derived.doubled }, children);
}
export default Component36370;
