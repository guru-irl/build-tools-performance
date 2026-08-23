import React from 'react';
const LABEL_30524 = 'component_30524';
export function Component30524({ value = 30524, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30524, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30524, 'data-value': derived.doubled }, children);
}
export default Component30524;
