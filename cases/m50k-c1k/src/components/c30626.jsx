import React from 'react';
const LABEL_30626 = 'component_30626';
export function Component30626({ value = 30626, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30626, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30626, 'data-value': derived.doubled }, children);
}
export default Component30626;
