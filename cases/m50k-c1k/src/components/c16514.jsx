import React from 'react';
const LABEL_16514 = 'component_16514';
export function Component16514({ value = 16514, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16514, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16514, 'data-value': derived.doubled }, children);
}
export default Component16514;
