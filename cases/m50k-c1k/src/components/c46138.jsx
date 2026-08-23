import React from 'react';
const LABEL_46138 = 'component_46138';
export function Component46138({ value = 46138, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46138, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46138, 'data-value': derived.doubled }, children);
}
export default Component46138;
