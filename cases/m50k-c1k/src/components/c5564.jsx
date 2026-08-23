import React from 'react';
const LABEL_5564 = 'component_5564';
export function Component5564({ value = 5564, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5564, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5564, 'data-value': derived.doubled }, children);
}
export default Component5564;
