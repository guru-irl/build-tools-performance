import React from 'react';
const LABEL_11415 = 'component_11415';
export function Component11415({ value = 11415, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11415, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11415, 'data-value': derived.doubled }, children);
}
export default Component11415;
