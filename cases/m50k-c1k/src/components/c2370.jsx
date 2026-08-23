import React from 'react';
const LABEL_2370 = 'component_2370';
export function Component2370({ value = 2370, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2370, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2370, 'data-value': derived.doubled }, children);
}
export default Component2370;
