import React from 'react';
const LABEL_7188 = 'component_7188';
export function Component7188({ value = 7188, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7188, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7188, 'data-value': derived.doubled }, children);
}
export default Component7188;
