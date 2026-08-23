import React from 'react';
const LABEL_14278 = 'component_14278';
export function Component14278({ value = 14278, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14278, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14278, 'data-value': derived.doubled }, children);
}
export default Component14278;
