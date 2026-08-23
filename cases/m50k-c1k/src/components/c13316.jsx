import React from 'react';
const LABEL_13316 = 'component_13316';
export function Component13316({ value = 13316, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13316, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13316, 'data-value': derived.doubled }, children);
}
export default Component13316;
