import React from 'react';
const LABEL_16933 = 'component_16933';
export function Component16933({ value = 16933, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16933, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16933, 'data-value': derived.doubled }, children);
}
export default Component16933;
