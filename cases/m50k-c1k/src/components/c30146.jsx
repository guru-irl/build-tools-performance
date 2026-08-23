import React from 'react';
const LABEL_30146 = 'component_30146';
export function Component30146({ value = 30146, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30146, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30146, 'data-value': derived.doubled }, children);
}
export default Component30146;
