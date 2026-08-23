import React from 'react';
const LABEL_42192 = 'component_42192';
export function Component42192({ value = 42192, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42192, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42192, 'data-value': derived.doubled }, children);
}
export default Component42192;
