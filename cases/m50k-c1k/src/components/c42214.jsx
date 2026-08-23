import React from 'react';
const LABEL_42214 = 'component_42214';
export function Component42214({ value = 42214, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42214, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42214, 'data-value': derived.doubled }, children);
}
export default Component42214;
