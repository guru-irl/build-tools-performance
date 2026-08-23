import React from 'react';
const LABEL_30490 = 'component_30490';
export function Component30490({ value = 30490, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30490, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30490, 'data-value': derived.doubled }, children);
}
export default Component30490;
