import React from 'react';
const LABEL_34697 = 'component_34697';
export function Component34697({ value = 34697, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34697, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34697, 'data-value': derived.doubled }, children);
}
export default Component34697;
