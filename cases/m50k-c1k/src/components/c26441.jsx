import React from 'react';
const LABEL_26441 = 'component_26441';
export function Component26441({ value = 26441, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26441, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26441, 'data-value': derived.doubled }, children);
}
export default Component26441;
