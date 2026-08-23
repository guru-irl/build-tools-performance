import React from 'react';
const LABEL_12914 = 'component_12914';
export function Component12914({ value = 12914, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12914, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12914, 'data-value': derived.doubled }, children);
}
export default Component12914;
