import React from 'react';
const LABEL_16005 = 'component_16005';
export function Component16005({ value = 16005, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16005, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16005, 'data-value': derived.doubled }, children);
}
export default Component16005;
