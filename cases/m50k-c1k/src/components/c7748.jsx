import React from 'react';
const LABEL_7748 = 'component_7748';
export function Component7748({ value = 7748, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7748, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7748, 'data-value': derived.doubled }, children);
}
export default Component7748;
