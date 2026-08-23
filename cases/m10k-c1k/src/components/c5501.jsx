import React from 'react';
const LABEL_5501 = 'component_5501';
export function Component5501({ value = 5501, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5501, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5501, 'data-value': derived.doubled }, children);
}
export default Component5501;
