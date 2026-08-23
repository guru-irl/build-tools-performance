import React from 'react';
const LABEL_25320 = 'component_25320';
export function Component25320({ value = 25320, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25320, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25320, 'data-value': derived.doubled }, children);
}
export default Component25320;
