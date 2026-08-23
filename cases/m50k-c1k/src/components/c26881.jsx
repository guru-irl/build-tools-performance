import React from 'react';
const LABEL_26881 = 'component_26881';
export function Component26881({ value = 26881, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26881, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26881, 'data-value': derived.doubled }, children);
}
export default Component26881;
