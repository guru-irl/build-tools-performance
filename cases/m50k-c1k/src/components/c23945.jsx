import React from 'react';
const LABEL_23945 = 'component_23945';
export function Component23945({ value = 23945, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23945, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23945, 'data-value': derived.doubled }, children);
}
export default Component23945;
