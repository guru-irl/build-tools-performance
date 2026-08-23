import React from 'react';
const LABEL_9051 = 'component_9051';
export function Component9051({ value = 9051, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9051, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9051, 'data-value': derived.doubled }, children);
}
export default Component9051;
