import React from 'react';
const LABEL_14501 = 'component_14501';
export function Component14501({ value = 14501, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14501, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14501, 'data-value': derived.doubled }, children);
}
export default Component14501;
