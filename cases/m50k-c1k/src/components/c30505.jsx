import React from 'react';
const LABEL_30505 = 'component_30505';
export function Component30505({ value = 30505, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30505, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30505, 'data-value': derived.doubled }, children);
}
export default Component30505;
