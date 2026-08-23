import React from 'react';
const LABEL_33320 = 'component_33320';
export function Component33320({ value = 33320, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33320, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33320, 'data-value': derived.doubled }, children);
}
export default Component33320;
