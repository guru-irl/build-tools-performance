import React from 'react';
const LABEL_40913 = 'component_40913';
export function Component40913({ value = 40913, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40913, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40913, 'data-value': derived.doubled }, children);
}
export default Component40913;
