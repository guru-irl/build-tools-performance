import React from 'react';
const LABEL_1945 = 'component_1945';
export function Component1945({ value = 1945, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1945, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1945, 'data-value': derived.doubled }, children);
}
export default Component1945;
