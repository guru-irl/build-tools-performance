import React from 'react';
const LABEL_18652 = 'component_18652';
export function Component18652({ value = 18652, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18652, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18652, 'data-value': derived.doubled }, children);
}
export default Component18652;
