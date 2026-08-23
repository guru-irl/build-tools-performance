import React from 'react';
const LABEL_35370 = 'component_35370';
export function Component35370({ value = 35370, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35370, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35370, 'data-value': derived.doubled }, children);
}
export default Component35370;
