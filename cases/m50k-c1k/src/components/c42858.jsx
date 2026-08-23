import React from 'react';
const LABEL_42858 = 'component_42858';
export function Component42858({ value = 42858, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42858, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42858, 'data-value': derived.doubled }, children);
}
export default Component42858;
