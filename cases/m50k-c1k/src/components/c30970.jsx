import React from 'react';
const LABEL_30970 = 'component_30970';
export function Component30970({ value = 30970, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30970, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30970, 'data-value': derived.doubled }, children);
}
export default Component30970;
