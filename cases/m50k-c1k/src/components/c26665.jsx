import React from 'react';
const LABEL_26665 = 'component_26665';
export function Component26665({ value = 26665, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26665, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26665, 'data-value': derived.doubled }, children);
}
export default Component26665;
