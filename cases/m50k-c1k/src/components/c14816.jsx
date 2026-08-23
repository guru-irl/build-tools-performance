import React from 'react';
const LABEL_14816 = 'component_14816';
export function Component14816({ value = 14816, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14816, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14816, 'data-value': derived.doubled }, children);
}
export default Component14816;
