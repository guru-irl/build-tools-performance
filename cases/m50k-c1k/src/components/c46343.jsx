import React from 'react';
const LABEL_46343 = 'component_46343';
export function Component46343({ value = 46343, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46343, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46343, 'data-value': derived.doubled }, children);
}
export default Component46343;
