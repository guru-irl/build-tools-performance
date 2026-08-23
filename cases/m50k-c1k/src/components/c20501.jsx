import React from 'react';
const LABEL_20501 = 'component_20501';
export function Component20501({ value = 20501, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20501, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20501, 'data-value': derived.doubled }, children);
}
export default Component20501;
