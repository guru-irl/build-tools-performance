import React from 'react';
const LABEL_35050 = 'component_35050';
export function Component35050({ value = 35050, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35050, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35050, 'data-value': derived.doubled }, children);
}
export default Component35050;
