import React from 'react';
const LABEL_2970 = 'component_2970';
export function Component2970({ value = 2970, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2970, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2970, 'data-value': derived.doubled }, children);
}
export default Component2970;
