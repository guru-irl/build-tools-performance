import React from 'react';
const LABEL_22257 = 'component_22257';
export function Component22257({ value = 22257, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22257, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22257, 'data-value': derived.doubled }, children);
}
export default Component22257;
