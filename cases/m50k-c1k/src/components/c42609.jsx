import React from 'react';
const LABEL_42609 = 'component_42609';
export function Component42609({ value = 42609, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42609, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42609, 'data-value': derived.doubled }, children);
}
export default Component42609;
