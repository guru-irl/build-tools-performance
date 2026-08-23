import React from 'react';
const LABEL_12365 = 'component_12365';
export function Component12365({ value = 12365, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12365, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12365, 'data-value': derived.doubled }, children);
}
export default Component12365;
