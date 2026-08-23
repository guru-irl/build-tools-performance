import React from 'react';
const LABEL_24544 = 'component_24544';
export function Component24544({ value = 24544, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24544, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24544, 'data-value': derived.doubled }, children);
}
export default Component24544;
