import React from 'react';
const LABEL_1544 = 'component_1544';
export function Component1544({ value = 1544, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1544, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1544, 'data-value': derived.doubled }, children);
}
export default Component1544;
