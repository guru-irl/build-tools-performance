import React from 'react';
const LABEL_1868 = 'component_1868';
export function Component1868({ value = 1868, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1868, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1868, 'data-value': derived.doubled }, children);
}
export default Component1868;
