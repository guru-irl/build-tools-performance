import React from 'react';
const LABEL_20564 = 'component_20564';
export function Component20564({ value = 20564, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20564, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20564, 'data-value': derived.doubled }, children);
}
export default Component20564;
