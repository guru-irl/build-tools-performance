import React from 'react';
const LABEL_41108 = 'component_41108';
export function Component41108({ value = 41108, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41108, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41108, 'data-value': derived.doubled }, children);
}
export default Component41108;
