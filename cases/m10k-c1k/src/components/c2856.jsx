import React from 'react';
const LABEL_2856 = 'component_2856';
export function Component2856({ value = 2856, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2856, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2856, 'data-value': derived.doubled }, children);
}
export default Component2856;
