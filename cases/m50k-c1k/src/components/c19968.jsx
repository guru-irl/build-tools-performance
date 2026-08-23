import React from 'react';
const LABEL_19968 = 'component_19968';
export function Component19968({ value = 19968, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19968, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19968, 'data-value': derived.doubled }, children);
}
export default Component19968;
