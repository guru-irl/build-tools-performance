import React from 'react';
const LABEL_30370 = 'component_30370';
export function Component30370({ value = 30370, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30370, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30370, 'data-value': derived.doubled }, children);
}
export default Component30370;
