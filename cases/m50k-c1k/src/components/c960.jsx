import React from 'react';
const LABEL_960 = 'component_960';
export function Component960({ value = 960, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_960, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_960, 'data-value': derived.doubled }, children);
}
export default Component960;
