import React from 'react';
const LABEL_29075 = 'component_29075';
export function Component29075({ value = 29075, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29075, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29075, 'data-value': derived.doubled }, children);
}
export default Component29075;
