import React from 'react';
const LABEL_22108 = 'component_22108';
export function Component22108({ value = 22108, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22108, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22108, 'data-value': derived.doubled }, children);
}
export default Component22108;
