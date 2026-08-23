import React from 'react';
const LABEL_45791 = 'component_45791';
export function Component45791({ value = 45791, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45791, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45791, 'data-value': derived.doubled }, children);
}
export default Component45791;
