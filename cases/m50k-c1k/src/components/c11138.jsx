import React from 'react';
const LABEL_11138 = 'component_11138';
export function Component11138({ value = 11138, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11138, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11138, 'data-value': derived.doubled }, children);
}
export default Component11138;
