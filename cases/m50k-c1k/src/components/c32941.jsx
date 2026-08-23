import React from 'react';
const LABEL_32941 = 'component_32941';
export function Component32941({ value = 32941, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32941, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32941, 'data-value': derived.doubled }, children);
}
export default Component32941;
