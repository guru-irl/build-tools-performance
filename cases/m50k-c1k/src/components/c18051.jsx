import React from 'react';
const LABEL_18051 = 'component_18051';
export function Component18051({ value = 18051, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18051, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18051, 'data-value': derived.doubled }, children);
}
export default Component18051;
