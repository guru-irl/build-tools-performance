import React from 'react';
const LABEL_42958 = 'component_42958';
export function Component42958({ value = 42958, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42958, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42958, 'data-value': derived.doubled }, children);
}
export default Component42958;
