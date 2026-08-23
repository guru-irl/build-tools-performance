import React from 'react';
const LABEL_20005 = 'component_20005';
export function Component20005({ value = 20005, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20005, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20005, 'data-value': derived.doubled }, children);
}
export default Component20005;
