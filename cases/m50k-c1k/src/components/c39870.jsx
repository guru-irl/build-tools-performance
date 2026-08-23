import React from 'react';
const LABEL_39870 = 'component_39870';
export function Component39870({ value = 39870, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39870, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39870, 'data-value': derived.doubled }, children);
}
export default Component39870;
