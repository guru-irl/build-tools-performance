import React from 'react';
const LABEL_44984 = 'component_44984';
export function Component44984({ value = 44984, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44984, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44984, 'data-value': derived.doubled }, children);
}
export default Component44984;
