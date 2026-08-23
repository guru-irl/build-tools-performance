import React from 'react';
const LABEL_42257 = 'component_42257';
export function Component42257({ value = 42257, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42257, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42257, 'data-value': derived.doubled }, children);
}
export default Component42257;
