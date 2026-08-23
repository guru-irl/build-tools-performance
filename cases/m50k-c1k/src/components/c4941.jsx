import React from 'react';
const LABEL_4941 = 'component_4941';
export function Component4941({ value = 4941, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4941, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4941, 'data-value': derived.doubled }, children);
}
export default Component4941;
