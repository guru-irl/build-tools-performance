import React from 'react';
const LABEL_30184 = 'component_30184';
export function Component30184({ value = 30184, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30184, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30184, 'data-value': derived.doubled }, children);
}
export default Component30184;
