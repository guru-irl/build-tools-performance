import React from 'react';
const LABEL_35058 = 'component_35058';
export function Component35058({ value = 35058, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35058, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35058, 'data-value': derived.doubled }, children);
}
export default Component35058;
