import React from 'react';
const LABEL_10960 = 'component_10960';
export function Component10960({ value = 10960, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10960, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10960, 'data-value': derived.doubled }, children);
}
export default Component10960;
