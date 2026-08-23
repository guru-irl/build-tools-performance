import React from 'react';
const LABEL_42557 = 'component_42557';
export function Component42557({ value = 42557, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42557, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42557, 'data-value': derived.doubled }, children);
}
export default Component42557;
