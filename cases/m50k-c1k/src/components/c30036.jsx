import React from 'react';
const LABEL_30036 = 'component_30036';
export function Component30036({ value = 30036, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30036, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30036, 'data-value': derived.doubled }, children);
}
export default Component30036;
