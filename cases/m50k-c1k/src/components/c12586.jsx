import React from 'react';
const LABEL_12586 = 'component_12586';
export function Component12586({ value = 12586, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12586, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12586, 'data-value': derived.doubled }, children);
}
export default Component12586;
