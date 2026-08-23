import React from 'react';
const LABEL_43950 = 'component_43950';
export function Component43950({ value = 43950, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43950, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43950, 'data-value': derived.doubled }, children);
}
export default Component43950;
