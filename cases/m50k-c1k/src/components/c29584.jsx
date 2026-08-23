import React from 'react';
const LABEL_29584 = 'component_29584';
export function Component29584({ value = 29584, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29584, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29584, 'data-value': derived.doubled }, children);
}
export default Component29584;
