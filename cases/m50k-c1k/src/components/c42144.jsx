import React from 'react';
const LABEL_42144 = 'component_42144';
export function Component42144({ value = 42144, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42144, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42144, 'data-value': derived.doubled }, children);
}
export default Component42144;
