import React from 'react';
const LABEL_10655 = 'component_10655';
export function Component10655({ value = 10655, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10655, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10655, 'data-value': derived.doubled }, children);
}
export default Component10655;
