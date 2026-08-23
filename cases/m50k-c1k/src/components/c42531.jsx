import React from 'react';
const LABEL_42531 = 'component_42531';
export function Component42531({ value = 42531, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42531, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42531, 'data-value': derived.doubled }, children);
}
export default Component42531;
