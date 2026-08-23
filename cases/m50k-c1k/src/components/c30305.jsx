import React from 'react';
const LABEL_30305 = 'component_30305';
export function Component30305({ value = 30305, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30305, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30305, 'data-value': derived.doubled }, children);
}
export default Component30305;
