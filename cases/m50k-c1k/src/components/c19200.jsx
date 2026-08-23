import React from 'react';
const LABEL_19200 = 'component_19200';
export function Component19200({ value = 19200, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19200, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19200, 'data-value': derived.doubled }, children);
}
export default Component19200;
