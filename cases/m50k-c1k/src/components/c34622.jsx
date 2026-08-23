import React from 'react';
const LABEL_34622 = 'component_34622';
export function Component34622({ value = 34622, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34622, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34622, 'data-value': derived.doubled }, children);
}
export default Component34622;
