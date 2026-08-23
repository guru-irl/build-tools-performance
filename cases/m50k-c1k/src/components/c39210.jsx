import React from 'react';
const LABEL_39210 = 'component_39210';
export function Component39210({ value = 39210, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39210, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39210, 'data-value': derived.doubled }, children);
}
export default Component39210;
