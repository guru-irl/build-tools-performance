import React from 'react';
const LABEL_44544 = 'component_44544';
export function Component44544({ value = 44544, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44544, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44544, 'data-value': derived.doubled }, children);
}
export default Component44544;
