import React from 'react';
const LABEL_36660 = 'component_36660';
export function Component36660({ value = 36660, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36660, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36660, 'data-value': derived.doubled }, children);
}
export default Component36660;
