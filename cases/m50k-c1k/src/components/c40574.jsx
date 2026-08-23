import React from 'react';
const LABEL_40574 = 'component_40574';
export function Component40574({ value = 40574, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40574, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40574, 'data-value': derived.doubled }, children);
}
export default Component40574;
