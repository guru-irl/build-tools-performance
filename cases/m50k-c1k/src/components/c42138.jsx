import React from 'react';
const LABEL_42138 = 'component_42138';
export function Component42138({ value = 42138, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42138, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42138, 'data-value': derived.doubled }, children);
}
export default Component42138;
