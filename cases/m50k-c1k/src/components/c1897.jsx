import React from 'react';
const LABEL_1897 = 'component_1897';
export function Component1897({ value = 1897, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1897, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1897, 'data-value': derived.doubled }, children);
}
export default Component1897;
