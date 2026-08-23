import React from 'react';
const LABEL_20960 = 'component_20960';
export function Component20960({ value = 20960, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20960, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20960, 'data-value': derived.doubled }, children);
}
export default Component20960;
