import React from 'react';
const LABEL_42005 = 'component_42005';
export function Component42005({ value = 42005, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42005, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42005, 'data-value': derived.doubled }, children);
}
export default Component42005;
