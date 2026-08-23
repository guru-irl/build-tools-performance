import React from 'react';
const LABEL_20528 = 'component_20528';
export function Component20528({ value = 20528, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20528, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20528, 'data-value': derived.doubled }, children);
}
export default Component20528;
