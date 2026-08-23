import React from 'react';
const LABEL_42730 = 'component_42730';
export function Component42730({ value = 42730, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42730, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42730, 'data-value': derived.doubled }, children);
}
export default Component42730;
