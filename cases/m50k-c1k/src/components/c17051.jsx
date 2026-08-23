import React from 'react';
const LABEL_17051 = 'component_17051';
export function Component17051({ value = 17051, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17051, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17051, 'data-value': derived.doubled }, children);
}
export default Component17051;
