import React from 'react';
const LABEL_6292 = 'component_6292';
export function Component6292({ value = 6292, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6292, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6292, 'data-value': derived.doubled }, children);
}
export default Component6292;
