import React from 'react';
const LABEL_9693 = 'component_9693';
export function Component9693({ value = 9693, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9693, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9693, 'data-value': derived.doubled }, children);
}
export default Component9693;
