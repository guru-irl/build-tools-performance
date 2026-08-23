import React from 'react';
const LABEL_45188 = 'component_45188';
export function Component45188({ value = 45188, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45188, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45188, 'data-value': derived.doubled }, children);
}
export default Component45188;
