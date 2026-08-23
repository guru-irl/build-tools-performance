import React from 'react';
const LABEL_12059 = 'component_12059';
export function Component12059({ value = 12059, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12059, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12059, 'data-value': derived.doubled }, children);
}
export default Component12059;
