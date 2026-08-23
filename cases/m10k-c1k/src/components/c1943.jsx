import React from 'react';
const LABEL_1943 = 'component_1943';
export function Component1943({ value = 1943, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1943, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1943, 'data-value': derived.doubled }, children);
}
export default Component1943;
