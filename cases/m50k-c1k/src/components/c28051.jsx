import React from 'react';
const LABEL_28051 = 'component_28051';
export function Component28051({ value = 28051, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28051, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28051, 'data-value': derived.doubled }, children);
}
export default Component28051;
