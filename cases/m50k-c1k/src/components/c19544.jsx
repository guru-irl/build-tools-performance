import React from 'react';
const LABEL_19544 = 'component_19544';
export function Component19544({ value = 19544, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19544, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19544, 'data-value': derived.doubled }, children);
}
export default Component19544;
