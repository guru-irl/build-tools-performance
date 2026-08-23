import React from 'react';
const LABEL_35592 = 'component_35592';
export function Component35592({ value = 35592, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35592, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35592, 'data-value': derived.doubled }, children);
}
export default Component35592;
