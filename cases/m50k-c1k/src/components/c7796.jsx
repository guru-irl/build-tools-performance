import React from 'react';
const LABEL_7796 = 'component_7796';
export function Component7796({ value = 7796, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7796, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7796, 'data-value': derived.doubled }, children);
}
export default Component7796;
