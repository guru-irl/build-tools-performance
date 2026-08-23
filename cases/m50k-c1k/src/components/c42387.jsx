import React from 'react';
const LABEL_42387 = 'component_42387';
export function Component42387({ value = 42387, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42387, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42387, 'data-value': derived.doubled }, children);
}
export default Component42387;
