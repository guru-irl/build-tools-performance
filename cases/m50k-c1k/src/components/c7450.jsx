import React from 'react';
const LABEL_7450 = 'component_7450';
export function Component7450({ value = 7450, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7450, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7450, 'data-value': derived.doubled }, children);
}
export default Component7450;
