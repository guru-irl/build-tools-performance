import React from 'react';
const LABEL_12902 = 'component_12902';
export function Component12902({ value = 12902, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12902, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12902, 'data-value': derived.doubled }, children);
}
export default Component12902;
