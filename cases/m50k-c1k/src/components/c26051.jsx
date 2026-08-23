import React from 'react';
const LABEL_26051 = 'component_26051';
export function Component26051({ value = 26051, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26051, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26051, 'data-value': derived.doubled }, children);
}
export default Component26051;
