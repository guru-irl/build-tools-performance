import React from 'react';
const LABEL_20365 = 'component_20365';
export function Component20365({ value = 20365, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20365, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20365, 'data-value': derived.doubled }, children);
}
export default Component20365;
