import React from 'react';
const LABEL_24655 = 'component_24655';
export function Component24655({ value = 24655, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24655, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24655, 'data-value': derived.doubled }, children);
}
export default Component24655;
