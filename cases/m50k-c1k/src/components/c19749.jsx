import React from 'react';
const LABEL_19749 = 'component_19749';
export function Component19749({ value = 19749, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19749, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19749, 'data-value': derived.doubled }, children);
}
export default Component19749;
