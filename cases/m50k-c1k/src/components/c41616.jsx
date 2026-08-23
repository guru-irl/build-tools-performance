import React from 'react';
const LABEL_41616 = 'component_41616';
export function Component41616({ value = 41616, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41616, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41616, 'data-value': derived.doubled }, children);
}
export default Component41616;
