import React from 'react';
const LABEL_41792 = 'component_41792';
export function Component41792({ value = 41792, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41792, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41792, 'data-value': derived.doubled }, children);
}
export default Component41792;
