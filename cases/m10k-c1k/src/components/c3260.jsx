import React from 'react';
const LABEL_3260 = 'component_3260';
export function Component3260({ value = 3260, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3260, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3260, 'data-value': derived.doubled }, children);
}
export default Component3260;
