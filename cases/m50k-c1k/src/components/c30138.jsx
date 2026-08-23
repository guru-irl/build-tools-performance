import React from 'react';
const LABEL_30138 = 'component_30138';
export function Component30138({ value = 30138, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30138, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30138, 'data-value': derived.doubled }, children);
}
export default Component30138;
