import React from 'react';
const LABEL_33592 = 'component_33592';
export function Component33592({ value = 33592, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33592, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33592, 'data-value': derived.doubled }, children);
}
export default Component33592;
