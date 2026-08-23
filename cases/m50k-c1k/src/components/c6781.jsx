import React from 'react';
const LABEL_6781 = 'component_6781';
export function Component6781({ value = 6781, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6781, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6781, 'data-value': derived.doubled }, children);
}
export default Component6781;
