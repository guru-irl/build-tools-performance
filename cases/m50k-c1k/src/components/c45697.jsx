import React from 'react';
const LABEL_45697 = 'component_45697';
export function Component45697({ value = 45697, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45697, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45697, 'data-value': derived.doubled }, children);
}
export default Component45697;
