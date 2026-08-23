import React from 'react';
const LABEL_36709 = 'component_36709';
export function Component36709({ value = 36709, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36709, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36709, 'data-value': derived.doubled }, children);
}
export default Component36709;
