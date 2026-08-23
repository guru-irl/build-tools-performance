import React from 'react';
const LABEL_11514 = 'component_11514';
export function Component11514({ value = 11514, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11514, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11514, 'data-value': derived.doubled }, children);
}
export default Component11514;
