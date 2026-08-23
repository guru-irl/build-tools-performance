import React from 'react';
const LABEL_20871 = 'component_20871';
export function Component20871({ value = 20871, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20871, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20871, 'data-value': derived.doubled }, children);
}
export default Component20871;
