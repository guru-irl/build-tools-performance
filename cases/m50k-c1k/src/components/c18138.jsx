import React from 'react';
const LABEL_18138 = 'component_18138';
export function Component18138({ value = 18138, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18138, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18138, 'data-value': derived.doubled }, children);
}
export default Component18138;
