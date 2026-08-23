import React from 'react';
const LABEL_41644 = 'component_41644';
export function Component41644({ value = 41644, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41644, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41644, 'data-value': derived.doubled }, children);
}
export default Component41644;
