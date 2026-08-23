import React from 'react';
const LABEL_44976 = 'component_44976';
export function Component44976({ value = 44976, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44976, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44976, 'data-value': derived.doubled }, children);
}
export default Component44976;
