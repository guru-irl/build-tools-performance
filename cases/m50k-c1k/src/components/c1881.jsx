import React from 'react';
const LABEL_1881 = 'component_1881';
export function Component1881({ value = 1881, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1881, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1881, 'data-value': derived.doubled }, children);
}
export default Component1881;
