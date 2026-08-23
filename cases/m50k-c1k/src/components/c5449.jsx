import React from 'react';
const LABEL_5449 = 'component_5449';
export function Component5449({ value = 5449, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5449, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5449, 'data-value': derived.doubled }, children);
}
export default Component5449;
