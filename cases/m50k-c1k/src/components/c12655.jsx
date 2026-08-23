import React from 'react';
const LABEL_12655 = 'component_12655';
export function Component12655({ value = 12655, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12655, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12655, 'data-value': derived.doubled }, children);
}
export default Component12655;
