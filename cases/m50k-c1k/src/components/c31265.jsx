import React from 'react';
const LABEL_31265 = 'component_31265';
export function Component31265({ value = 31265, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_31265, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_31265, 'data-value': derived.doubled }, children);
}
export default Component31265;
