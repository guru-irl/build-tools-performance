import React from 'react';
const LABEL_42451 = 'component_42451';
export function Component42451({ value = 42451, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42451, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42451, 'data-value': derived.doubled }, children);
}
export default Component42451;
