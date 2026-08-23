import React from 'react';
const LABEL_36320 = 'component_36320';
export function Component36320({ value = 36320, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36320, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36320, 'data-value': derived.doubled }, children);
}
export default Component36320;
