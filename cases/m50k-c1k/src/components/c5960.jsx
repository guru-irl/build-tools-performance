import React from 'react';
const LABEL_5960 = 'component_5960';
export function Component5960({ value = 5960, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5960, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5960, 'data-value': derived.doubled }, children);
}
export default Component5960;
