import React from 'react';
const LABEL_12706 = 'component_12706';
export function Component12706({ value = 12706, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12706, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12706, 'data-value': derived.doubled }, children);
}
export default Component12706;
