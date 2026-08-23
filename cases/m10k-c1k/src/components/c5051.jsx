import React from 'react';
const LABEL_5051 = 'component_5051';
export function Component5051({ value = 5051, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5051, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5051, 'data-value': derived.doubled }, children);
}
export default Component5051;
