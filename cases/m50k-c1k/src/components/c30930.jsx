import React from 'react';
const LABEL_30930 = 'component_30930';
export function Component30930({ value = 30930, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30930, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30930, 'data-value': derived.doubled }, children);
}
export default Component30930;
