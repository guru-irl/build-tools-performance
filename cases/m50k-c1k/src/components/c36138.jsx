import React from 'react';
const LABEL_36138 = 'component_36138';
export function Component36138({ value = 36138, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36138, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36138, 'data-value': derived.doubled }, children);
}
export default Component36138;
