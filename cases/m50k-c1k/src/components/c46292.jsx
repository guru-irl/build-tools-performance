import React from 'react';
const LABEL_46292 = 'component_46292';
export function Component46292({ value = 46292, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46292, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46292, 'data-value': derived.doubled }, children);
}
export default Component46292;
