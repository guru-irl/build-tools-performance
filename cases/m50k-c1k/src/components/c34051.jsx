import React from 'react';
const LABEL_34051 = 'component_34051';
export function Component34051({ value = 34051, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34051, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34051, 'data-value': derived.doubled }, children);
}
export default Component34051;
