import React from 'react';
const LABEL_19592 = 'component_19592';
export function Component19592({ value = 19592, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19592, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19592, 'data-value': derived.doubled }, children);
}
export default Component19592;
