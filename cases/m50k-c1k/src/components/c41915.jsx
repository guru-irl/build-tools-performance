import React from 'react';
const LABEL_41915 = 'component_41915';
export function Component41915({ value = 41915, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41915, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41915, 'data-value': derived.doubled }, children);
}
export default Component41915;
