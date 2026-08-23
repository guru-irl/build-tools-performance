import React from 'react';
const LABEL_2005 = 'component_2005';
export function Component2005({ value = 2005, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2005, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2005, 'data-value': derived.doubled }, children);
}
export default Component2005;
