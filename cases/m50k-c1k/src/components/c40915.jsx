import React from 'react';
const LABEL_40915 = 'component_40915';
export function Component40915({ value = 40915, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40915, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40915, 'data-value': derived.doubled }, children);
}
export default Component40915;
