import React from 'react';
const LABEL_45989 = 'component_45989';
export function Component45989({ value = 45989, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45989, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45989, 'data-value': derived.doubled }, children);
}
export default Component45989;
