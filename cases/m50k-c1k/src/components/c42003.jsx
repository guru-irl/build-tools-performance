import React from 'react';
const LABEL_42003 = 'component_42003';
export function Component42003({ value = 42003, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42003, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42003, 'data-value': derived.doubled }, children);
}
export default Component42003;
