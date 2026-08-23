import React from 'react';
const LABEL_13238 = 'component_13238';
export function Component13238({ value = 13238, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13238, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13238, 'data-value': derived.doubled }, children);
}
export default Component13238;
