import React from 'react';
const LABEL_14738 = 'component_14738';
export function Component14738({ value = 14738, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14738, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14738, 'data-value': derived.doubled }, children);
}
export default Component14738;
