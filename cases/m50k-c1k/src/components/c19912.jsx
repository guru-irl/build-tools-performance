import React from 'react';
const LABEL_19912 = 'component_19912';
export function Component19912({ value = 19912, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19912, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19912, 'data-value': derived.doubled }, children);
}
export default Component19912;
