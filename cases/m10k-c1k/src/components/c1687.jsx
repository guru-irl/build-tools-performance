import React from 'react';
const LABEL_1687 = 'component_1687';
export function Component1687({ value = 1687, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1687, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1687, 'data-value': derived.doubled }, children);
}
export default Component1687;
