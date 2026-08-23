import React from 'react';
const LABEL_4622 = 'component_4622';
export function Component4622({ value = 4622, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4622, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4622, 'data-value': derived.doubled }, children);
}
export default Component4622;
