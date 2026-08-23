import React from 'react';
const LABEL_41152 = 'component_41152';
export function Component41152({ value = 41152, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41152, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41152, 'data-value': derived.doubled }, children);
}
export default Component41152;
