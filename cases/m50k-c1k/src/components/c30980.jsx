import React from 'react';
const LABEL_30980 = 'component_30980';
export function Component30980({ value = 30980, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30980, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30980, 'data-value': derived.doubled }, children);
}
export default Component30980;
