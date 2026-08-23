import React from 'react';
const LABEL_1894 = 'component_1894';
export function Component1894({ value = 1894, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1894, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1894, 'data-value': derived.doubled }, children);
}
export default Component1894;
