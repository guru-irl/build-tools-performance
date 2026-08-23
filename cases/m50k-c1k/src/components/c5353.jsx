import React from 'react';
const LABEL_5353 = 'component_5353';
export function Component5353({ value = 5353, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5353, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5353, 'data-value': derived.doubled }, children);
}
export default Component5353;
