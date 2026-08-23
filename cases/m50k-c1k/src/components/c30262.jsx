import React from 'react';
const LABEL_30262 = 'component_30262';
export function Component30262({ value = 30262, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30262, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30262, 'data-value': derived.doubled }, children);
}
export default Component30262;
