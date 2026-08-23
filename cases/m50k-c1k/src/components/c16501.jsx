import React from 'react';
const LABEL_16501 = 'component_16501';
export function Component16501({ value = 16501, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16501, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16501, 'data-value': derived.doubled }, children);
}
export default Component16501;
