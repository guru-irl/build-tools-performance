import React from 'react';
const LABEL_45730 = 'component_45730';
export function Component45730({ value = 45730, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45730, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45730, 'data-value': derived.doubled }, children);
}
export default Component45730;
