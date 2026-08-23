import React from 'react';
const LABEL_10544 = 'component_10544';
export function Component10544({ value = 10544, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10544, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10544, 'data-value': derived.doubled }, children);
}
export default Component10544;
