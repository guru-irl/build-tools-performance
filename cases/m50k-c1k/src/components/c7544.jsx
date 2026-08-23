import React from 'react';
const LABEL_7544 = 'component_7544';
export function Component7544({ value = 7544, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7544, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7544, 'data-value': derived.doubled }, children);
}
export default Component7544;
