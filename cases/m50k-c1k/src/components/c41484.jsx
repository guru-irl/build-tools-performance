import React from 'react';
const LABEL_41484 = 'component_41484';
export function Component41484({ value = 41484, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41484, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41484, 'data-value': derived.doubled }, children);
}
export default Component41484;
