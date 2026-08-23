import React from 'react';
const LABEL_40407 = 'component_40407';
export function Component40407({ value = 40407, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40407, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40407, 'data-value': derived.doubled }, children);
}
export default Component40407;
