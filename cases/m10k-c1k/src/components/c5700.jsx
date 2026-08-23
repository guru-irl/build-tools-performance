import React from 'react';
const LABEL_5700 = 'component_5700';
export function Component5700({ value = 5700, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5700, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5700, 'data-value': derived.doubled }, children);
}
export default Component5700;
