import React from 'react';
const LABEL_18005 = 'component_18005';
export function Component18005({ value = 18005, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18005, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18005, 'data-value': derived.doubled }, children);
}
export default Component18005;
