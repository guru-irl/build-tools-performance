import React from 'react';
const LABEL_41790 = 'component_41790';
export function Component41790({ value = 41790, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41790, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41790, 'data-value': derived.doubled }, children);
}
export default Component41790;
