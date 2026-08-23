import React from 'react';
const LABEL_5108 = 'component_5108';
export function Component5108({ value = 5108, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5108, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5108, 'data-value': derived.doubled }, children);
}
export default Component5108;
