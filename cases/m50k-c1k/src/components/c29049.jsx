import React from 'react';
const LABEL_29049 = 'component_29049';
export function Component29049({ value = 29049, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29049, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29049, 'data-value': derived.doubled }, children);
}
export default Component29049;
