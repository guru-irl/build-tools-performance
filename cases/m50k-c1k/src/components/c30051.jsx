import React from 'react';
const LABEL_30051 = 'component_30051';
export function Component30051({ value = 30051, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30051, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30051, 'data-value': derived.doubled }, children);
}
export default Component30051;
