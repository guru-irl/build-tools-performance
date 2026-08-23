import React from 'react';
const LABEL_8138 = 'component_8138';
export function Component8138({ value = 8138, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8138, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8138, 'data-value': derived.doubled }, children);
}
export default Component8138;
