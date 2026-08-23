import React from 'react';
const LABEL_6837 = 'component_6837';
export function Component6837({ value = 6837, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6837, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6837, 'data-value': derived.doubled }, children);
}
export default Component6837;
