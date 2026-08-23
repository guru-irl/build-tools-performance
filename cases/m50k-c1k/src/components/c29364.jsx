import React from 'react';
const LABEL_29364 = 'component_29364';
export function Component29364({ value = 29364, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29364, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29364, 'data-value': derived.doubled }, children);
}
export default Component29364;
