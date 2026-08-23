import React from 'react';
const LABEL_42290 = 'component_42290';
export function Component42290({ value = 42290, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42290, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42290, 'data-value': derived.doubled }, children);
}
export default Component42290;
