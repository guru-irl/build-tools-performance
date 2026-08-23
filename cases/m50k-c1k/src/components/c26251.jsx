import React from 'react';
const LABEL_26251 = 'component_26251';
export function Component26251({ value = 26251, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26251, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26251, 'data-value': derived.doubled }, children);
}
export default Component26251;
