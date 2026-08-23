import React from 'react';
const LABEL_46046 = 'component_46046';
export function Component46046({ value = 46046, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46046, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46046, 'data-value': derived.doubled }, children);
}
export default Component46046;
