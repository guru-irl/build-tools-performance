import React from 'react';
const LABEL_12640 = 'component_12640';
export function Component12640({ value = 12640, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12640, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12640, 'data-value': derived.doubled }, children);
}
export default Component12640;
