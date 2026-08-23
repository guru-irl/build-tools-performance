import React from 'react';
const LABEL_39586 = 'component_39586';
export function Component39586({ value = 39586, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39586, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39586, 'data-value': derived.doubled }, children);
}
export default Component39586;
