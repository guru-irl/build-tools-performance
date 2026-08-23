import React from 'react';
const LABEL_36230 = 'component_36230';
export function Component36230({ value = 36230, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36230, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36230, 'data-value': derived.doubled }, children);
}
export default Component36230;
