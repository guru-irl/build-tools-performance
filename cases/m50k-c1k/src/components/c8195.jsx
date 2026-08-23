import React from 'react';
const LABEL_8195 = 'component_8195';
export function Component8195({ value = 8195, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8195, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8195, 'data-value': derived.doubled }, children);
}
export default Component8195;
