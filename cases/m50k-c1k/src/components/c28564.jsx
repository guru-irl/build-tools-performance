import React from 'react';
const LABEL_28564 = 'component_28564';
export function Component28564({ value = 28564, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28564, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28564, 'data-value': derived.doubled }, children);
}
export default Component28564;
