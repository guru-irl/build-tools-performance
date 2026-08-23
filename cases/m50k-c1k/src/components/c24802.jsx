import React from 'react';
const LABEL_24802 = 'component_24802';
export function Component24802({ value = 24802, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24802, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24802, 'data-value': derived.doubled }, children);
}
export default Component24802;
