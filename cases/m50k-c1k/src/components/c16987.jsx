import React from 'react';
const LABEL_16987 = 'component_16987';
export function Component16987({ value = 16987, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16987, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16987, 'data-value': derived.doubled }, children);
}
export default Component16987;
