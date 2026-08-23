import React from 'react';
const LABEL_15492 = 'component_15492';
export function Component15492({ value = 15492, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15492, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15492, 'data-value': derived.doubled }, children);
}
export default Component15492;
