import React from 'react';
const LABEL_1895 = 'component_1895';
export function Component1895({ value = 1895, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1895, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1895, 'data-value': derived.doubled }, children);
}
export default Component1895;
