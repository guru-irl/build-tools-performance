import React from 'react';
const LABEL_20181 = 'component_20181';
export function Component20181({ value = 20181, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20181, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20181, 'data-value': derived.doubled }, children);
}
export default Component20181;
