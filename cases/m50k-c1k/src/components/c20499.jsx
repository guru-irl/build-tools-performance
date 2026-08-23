import React from 'react';
const LABEL_20499 = 'component_20499';
export function Component20499({ value = 20499, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20499, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20499, 'data-value': derived.doubled }, children);
}
export default Component20499;
