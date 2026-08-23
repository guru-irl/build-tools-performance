import React from 'react';
const LABEL_40320 = 'component_40320';
export function Component40320({ value = 40320, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40320, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40320, 'data-value': derived.doubled }, children);
}
export default Component40320;
