import React from 'react';
const LABEL_26544 = 'component_26544';
export function Component26544({ value = 26544, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26544, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26544, 'data-value': derived.doubled }, children);
}
export default Component26544;
