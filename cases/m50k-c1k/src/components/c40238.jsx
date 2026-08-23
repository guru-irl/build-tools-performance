import React from 'react';
const LABEL_40238 = 'component_40238';
export function Component40238({ value = 40238, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40238, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40238, 'data-value': derived.doubled }, children);
}
export default Component40238;
