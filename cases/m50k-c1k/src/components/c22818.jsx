import React from 'react';
const LABEL_22818 = 'component_22818';
export function Component22818({ value = 22818, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22818, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22818, 'data-value': derived.doubled }, children);
}
export default Component22818;
