import React from 'react';
const LABEL_19003 = 'component_19003';
export function Component19003({ value = 19003, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19003, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19003, 'data-value': derived.doubled }, children);
}
export default Component19003;
