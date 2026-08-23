import React from 'react';
const LABEL_10687 = 'component_10687';
export function Component10687({ value = 10687, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10687, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10687, 'data-value': derived.doubled }, children);
}
export default Component10687;
