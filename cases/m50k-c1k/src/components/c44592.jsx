import React from 'react';
const LABEL_44592 = 'component_44592';
export function Component44592({ value = 44592, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44592, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44592, 'data-value': derived.doubled }, children);
}
export default Component44592;
