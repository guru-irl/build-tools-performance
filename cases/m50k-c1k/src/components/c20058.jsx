import React from 'react';
const LABEL_20058 = 'component_20058';
export function Component20058({ value = 20058, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20058, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20058, 'data-value': derived.doubled }, children);
}
export default Component20058;
