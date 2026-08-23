import React from 'react';
const LABEL_3108 = 'component_3108';
export function Component3108({ value = 3108, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3108, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3108, 'data-value': derived.doubled }, children);
}
export default Component3108;
