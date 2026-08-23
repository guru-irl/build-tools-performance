import React from 'react';
const LABEL_108 = 'component_108';
export function Component108({ value = 108, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_108, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_108, 'data-value': derived.doubled }, children);
}
export default Component108;
