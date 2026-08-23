import React from 'react';
const LABEL_1138 = 'component_1138';
export function Component1138({ value = 1138, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1138, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1138, 'data-value': derived.doubled }, children);
}
export default Component1138;
