import React from 'react';
const LABEL_30061 = 'component_30061';
export function Component30061({ value = 30061, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30061, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30061, 'data-value': derived.doubled }, children);
}
export default Component30061;
