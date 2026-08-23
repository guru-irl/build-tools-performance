import React from 'react';
const LABEL_1207 = 'component_1207';
export function Component1207({ value = 1207, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1207, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1207, 'data-value': derived.doubled }, children);
}
export default Component1207;
