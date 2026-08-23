import React from 'react';
const LABEL_2051 = 'component_2051';
export function Component2051({ value = 2051, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2051, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2051, 'data-value': derived.doubled }, children);
}
export default Component2051;
