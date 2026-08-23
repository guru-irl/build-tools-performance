import React from 'react';
const LABEL_33514 = 'component_33514';
export function Component33514({ value = 33514, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33514, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33514, 'data-value': derived.doubled }, children);
}
export default Component33514;
