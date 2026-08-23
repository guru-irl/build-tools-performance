import React from 'react';
const LABEL_14138 = 'component_14138';
export function Component14138({ value = 14138, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14138, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14138, 'data-value': derived.doubled }, children);
}
export default Component14138;
