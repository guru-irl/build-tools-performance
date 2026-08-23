import React from 'react';
const LABEL_507 = 'component_507';
export function Component507({ value = 507, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_507, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_507, 'data-value': derived.doubled }, children);
}
export default Component507;
