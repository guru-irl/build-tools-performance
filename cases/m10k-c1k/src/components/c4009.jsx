import React from 'react';
const LABEL_4009 = 'component_4009';
export function Component4009({ value = 4009, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4009, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4009, 'data-value': derived.doubled }, children);
}
export default Component4009;
