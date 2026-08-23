import React from 'react';
const LABEL_42547 = 'component_42547';
export function Component42547({ value = 42547, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42547, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42547, 'data-value': derived.doubled }, children);
}
export default Component42547;
