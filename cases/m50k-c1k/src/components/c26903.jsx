import React from 'react';
const LABEL_26903 = 'component_26903';
export function Component26903({ value = 26903, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26903, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26903, 'data-value': derived.doubled }, children);
}
export default Component26903;
