import React from 'react';
const LABEL_40051 = 'component_40051';
export function Component40051({ value = 40051, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40051, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40051, 'data-value': derived.doubled }, children);
}
export default Component40051;
