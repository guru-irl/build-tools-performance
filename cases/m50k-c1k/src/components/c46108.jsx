import React from 'react';
const LABEL_46108 = 'component_46108';
export function Component46108({ value = 46108, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46108, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46108, 'data-value': derived.doubled }, children);
}
export default Component46108;
