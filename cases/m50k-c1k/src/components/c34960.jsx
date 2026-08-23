import React from 'react';
const LABEL_34960 = 'component_34960';
export function Component34960({ value = 34960, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34960, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34960, 'data-value': derived.doubled }, children);
}
export default Component34960;
