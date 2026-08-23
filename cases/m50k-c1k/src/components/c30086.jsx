import React from 'react';
const LABEL_30086 = 'component_30086';
export function Component30086({ value = 30086, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30086, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30086, 'data-value': derived.doubled }, children);
}
export default Component30086;
