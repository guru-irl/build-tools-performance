import React from 'react';
const LABEL_35115 = 'component_35115';
export function Component35115({ value = 35115, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35115, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35115, 'data-value': derived.doubled }, children);
}
export default Component35115;
