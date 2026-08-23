import React from 'react';
const LABEL_45816 = 'component_45816';
export function Component45816({ value = 45816, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45816, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45816, 'data-value': derived.doubled }, children);
}
export default Component45816;
