import React from 'react';
const LABEL_32501 = 'component_32501';
export function Component32501({ value = 32501, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32501, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32501, 'data-value': derived.doubled }, children);
}
export default Component32501;
