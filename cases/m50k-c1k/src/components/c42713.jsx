import React from 'react';
const LABEL_42713 = 'component_42713';
export function Component42713({ value = 42713, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42713, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42713, 'data-value': derived.doubled }, children);
}
export default Component42713;
