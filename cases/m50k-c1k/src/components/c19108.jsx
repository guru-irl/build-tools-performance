import React from 'react';
const LABEL_19108 = 'component_19108';
export function Component19108({ value = 19108, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19108, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19108, 'data-value': derived.doubled }, children);
}
export default Component19108;
