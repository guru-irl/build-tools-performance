import React from 'react';
const LABEL_28283 = 'component_28283';
export function Component28283({ value = 28283, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28283, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28283, 'data-value': derived.doubled }, children);
}
export default Component28283;
