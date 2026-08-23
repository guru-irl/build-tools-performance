import React from 'react';
const LABEL_40003 = 'component_40003';
export function Component40003({ value = 40003, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40003, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40003, 'data-value': derived.doubled }, children);
}
export default Component40003;
