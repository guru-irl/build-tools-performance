import React from 'react';
const LABEL_20051 = 'component_20051';
export function Component20051({ value = 20051, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20051, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20051, 'data-value': derived.doubled }, children);
}
export default Component20051;
