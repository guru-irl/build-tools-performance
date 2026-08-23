import React from 'react';
const LABEL_30741 = 'component_30741';
export function Component30741({ value = 30741, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30741, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30741, 'data-value': derived.doubled }, children);
}
export default Component30741;
