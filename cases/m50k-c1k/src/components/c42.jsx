import React from 'react';
const LABEL_42 = 'component_42';
export function Component42({ value = 42, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42, 'data-value': derived.doubled }, children);
}
export default Component42;
