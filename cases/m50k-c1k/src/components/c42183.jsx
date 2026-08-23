import React from 'react';
const LABEL_42183 = 'component_42183';
export function Component42183({ value = 42183, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42183, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42183, 'data-value': derived.doubled }, children);
}
export default Component42183;
