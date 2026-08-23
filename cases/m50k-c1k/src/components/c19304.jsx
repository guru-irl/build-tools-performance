import React from 'react';
const LABEL_19304 = 'component_19304';
export function Component19304({ value = 19304, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19304, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19304, 'data-value': derived.doubled }, children);
}
export default Component19304;
