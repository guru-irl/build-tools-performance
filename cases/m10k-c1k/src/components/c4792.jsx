import React from 'react';
const LABEL_4792 = 'component_4792';
export function Component4792({ value = 4792, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4792, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4792, 'data-value': derived.doubled }, children);
}
export default Component4792;
