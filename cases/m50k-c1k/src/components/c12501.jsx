import React from 'react';
const LABEL_12501 = 'component_12501';
export function Component12501({ value = 12501, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12501, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12501, 'data-value': derived.doubled }, children);
}
export default Component12501;
