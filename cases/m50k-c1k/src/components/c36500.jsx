import React from 'react';
const LABEL_36500 = 'component_36500';
export function Component36500({ value = 36500, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36500, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36500, 'data-value': derived.doubled }, children);
}
export default Component36500;
