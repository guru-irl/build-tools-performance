import React from 'react';
const LABEL_30950 = 'component_30950';
export function Component30950({ value = 30950, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30950, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30950, 'data-value': derived.doubled }, children);
}
export default Component30950;
