import React from 'react';
const LABEL_19292 = 'component_19292';
export function Component19292({ value = 19292, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19292, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19292, 'data-value': derived.doubled }, children);
}
export default Component19292;
