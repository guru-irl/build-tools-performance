import React from 'react';
const LABEL_6912 = 'component_6912';
export function Component6912({ value = 6912, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6912, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6912, 'data-value': derived.doubled }, children);
}
export default Component6912;
