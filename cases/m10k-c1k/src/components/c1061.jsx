import React from 'react';
const LABEL_1061 = 'component_1061';
export function Component1061({ value = 1061, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1061, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1061, 'data-value': derived.doubled }, children);
}
export default Component1061;
