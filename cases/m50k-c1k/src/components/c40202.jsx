import React from 'react';
const LABEL_40202 = 'component_40202';
export function Component40202({ value = 40202, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40202, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40202, 'data-value': derived.doubled }, children);
}
export default Component40202;
