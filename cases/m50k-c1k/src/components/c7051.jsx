import React from 'react';
const LABEL_7051 = 'component_7051';
export function Component7051({ value = 7051, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7051, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7051, 'data-value': derived.doubled }, children);
}
export default Component7051;
