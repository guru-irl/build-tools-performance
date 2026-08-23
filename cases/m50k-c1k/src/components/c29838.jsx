import React from 'react';
const LABEL_29838 = 'component_29838';
export function Component29838({ value = 29838, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29838, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29838, 'data-value': derived.doubled }, children);
}
export default Component29838;
