import React from 'react';
const LABEL_19214 = 'component_19214';
export function Component19214({ value = 19214, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19214, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19214, 'data-value': derived.doubled }, children);
}
export default Component19214;
