import React from 'react';
const LABEL_11800 = 'component_11800';
export function Component11800({ value = 11800, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11800, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11800, 'data-value': derived.doubled }, children);
}
export default Component11800;
