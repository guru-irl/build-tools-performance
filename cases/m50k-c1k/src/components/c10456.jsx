import React from 'react';
const LABEL_10456 = 'component_10456';
export function Component10456({ value = 10456, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10456, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10456, 'data-value': derived.doubled }, children);
}
export default Component10456;
