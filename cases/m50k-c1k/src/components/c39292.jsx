import React from 'react';
const LABEL_39292 = 'component_39292';
export function Component39292({ value = 39292, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39292, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39292, 'data-value': derived.doubled }, children);
}
export default Component39292;
