import React from 'react';
const LABEL_22388 = 'component_22388';
export function Component22388({ value = 22388, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22388, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22388, 'data-value': derived.doubled }, children);
}
export default Component22388;
