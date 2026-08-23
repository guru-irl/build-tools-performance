import React from 'react';
const LABEL_32364 = 'component_32364';
export function Component32364({ value = 32364, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32364, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32364, 'data-value': derived.doubled }, children);
}
export default Component32364;
