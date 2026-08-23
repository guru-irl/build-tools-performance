import React from 'react';
const LABEL_16049 = 'component_16049';
export function Component16049({ value = 16049, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16049, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16049, 'data-value': derived.doubled }, children);
}
export default Component16049;
