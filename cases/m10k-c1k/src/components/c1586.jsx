import React from 'react';
const LABEL_1586 = 'component_1586';
export function Component1586({ value = 1586, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1586, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1586, 'data-value': derived.doubled }, children);
}
export default Component1586;
