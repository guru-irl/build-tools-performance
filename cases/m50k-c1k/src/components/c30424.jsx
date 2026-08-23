import React from 'react';
const LABEL_30424 = 'component_30424';
export function Component30424({ value = 30424, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30424, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30424, 'data-value': derived.doubled }, children);
}
export default Component30424;
