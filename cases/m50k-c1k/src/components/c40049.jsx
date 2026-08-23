import React from 'react';
const LABEL_40049 = 'component_40049';
export function Component40049({ value = 40049, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40049, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40049, 'data-value': derived.doubled }, children);
}
export default Component40049;
