import React from 'react';
const LABEL_19469 = 'component_19469';
export function Component19469({ value = 19469, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19469, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19469, 'data-value': derived.doubled }, children);
}
export default Component19469;
