import React from 'react';
const LABEL_30610 = 'component_30610';
export function Component30610({ value = 30610, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30610, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30610, 'data-value': derived.doubled }, children);
}
export default Component30610;
