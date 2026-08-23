import React from 'react';
const LABEL_22010 = 'component_22010';
export function Component22010({ value = 22010, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22010, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22010, 'data-value': derived.doubled }, children);
}
export default Component22010;
