import React from 'react';
const LABEL_4544 = 'component_4544';
export function Component4544({ value = 4544, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4544, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4544, 'data-value': derived.doubled }, children);
}
export default Component4544;
