import React from 'react';
const LABEL_37343 = 'component_37343';
export function Component37343({ value = 37343, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37343, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37343, 'data-value': derived.doubled }, children);
}
export default Component37343;
