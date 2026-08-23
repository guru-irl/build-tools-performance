import React from 'react';
const LABEL_42794 = 'component_42794';
export function Component42794({ value = 42794, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42794, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42794, 'data-value': derived.doubled }, children);
}
export default Component42794;
