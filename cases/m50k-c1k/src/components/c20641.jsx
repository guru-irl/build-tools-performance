import React from 'react';
const LABEL_20641 = 'component_20641';
export function Component20641({ value = 20641, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20641, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20641, 'data-value': derived.doubled }, children);
}
export default Component20641;
