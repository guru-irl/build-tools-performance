import React from 'react';
const LABEL_7856 = 'component_7856';
export function Component7856({ value = 7856, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7856, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7856, 'data-value': derived.doubled }, children);
}
export default Component7856;
