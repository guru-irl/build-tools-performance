import React from 'react';
const LABEL_12166 = 'component_12166';
export function Component12166({ value = 12166, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12166, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12166, 'data-value': derived.doubled }, children);
}
export default Component12166;
