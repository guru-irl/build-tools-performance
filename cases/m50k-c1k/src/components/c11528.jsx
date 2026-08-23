import React from 'react';
const LABEL_11528 = 'component_11528';
export function Component11528({ value = 11528, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11528, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11528, 'data-value': derived.doubled }, children);
}
export default Component11528;
