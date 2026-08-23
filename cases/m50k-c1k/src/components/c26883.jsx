import React from 'react';
const LABEL_26883 = 'component_26883';
export function Component26883({ value = 26883, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26883, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26883, 'data-value': derived.doubled }, children);
}
export default Component26883;
