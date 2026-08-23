import React from 'react';
const LABEL_501 = 'component_501';
export function Component501({ value = 501, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_501, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_501, 'data-value': derived.doubled }, children);
}
export default Component501;
