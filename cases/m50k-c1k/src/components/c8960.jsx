import React from 'react';
const LABEL_8960 = 'component_8960';
export function Component8960({ value = 8960, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8960, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8960, 'data-value': derived.doubled }, children);
}
export default Component8960;
