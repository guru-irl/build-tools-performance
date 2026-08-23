import React from 'react';
const LABEL_45592 = 'component_45592';
export function Component45592({ value = 45592, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45592, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45592, 'data-value': derived.doubled }, children);
}
export default Component45592;
