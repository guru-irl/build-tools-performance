import React from 'react';
const LABEL_45051 = 'component_45051';
export function Component45051({ value = 45051, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45051, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45051, 'data-value': derived.doubled }, children);
}
export default Component45051;
