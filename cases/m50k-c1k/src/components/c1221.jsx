import React from 'react';
const LABEL_1221 = 'component_1221';
export function Component1221({ value = 1221, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1221, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1221, 'data-value': derived.doubled }, children);
}
export default Component1221;
