import React from 'react';
const LABEL_23051 = 'component_23051';
export function Component23051({ value = 23051, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23051, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23051, 'data-value': derived.doubled }, children);
}
export default Component23051;
