import React from 'react';
const LABEL_42105 = 'component_42105';
export function Component42105({ value = 42105, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42105, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42105, 'data-value': derived.doubled }, children);
}
export default Component42105;
