import React from 'react';
const LABEL_19202 = 'component_19202';
export function Component19202({ value = 19202, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19202, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19202, 'data-value': derived.doubled }, children);
}
export default Component19202;
