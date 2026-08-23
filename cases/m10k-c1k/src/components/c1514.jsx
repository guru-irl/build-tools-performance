import React from 'react';
const LABEL_1514 = 'component_1514';
export function Component1514({ value = 1514, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1514, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1514, 'data-value': derived.doubled }, children);
}
export default Component1514;
