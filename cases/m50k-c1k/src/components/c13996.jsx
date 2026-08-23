import React from 'react';
const LABEL_13996 = 'component_13996';
export function Component13996({ value = 13996, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13996, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13996, 'data-value': derived.doubled }, children);
}
export default Component13996;
