import React from 'react';
const LABEL_30851 = 'component_30851';
export function Component30851({ value = 30851, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30851, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30851, 'data-value': derived.doubled }, children);
}
export default Component30851;
