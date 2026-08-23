import React from 'react';
const LABEL_29278 = 'component_29278';
export function Component29278({ value = 29278, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29278, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29278, 'data-value': derived.doubled }, children);
}
export default Component29278;
