import React from 'react';
const LABEL_5709 = 'component_5709';
export function Component5709({ value = 5709, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5709, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5709, 'data-value': derived.doubled }, children);
}
export default Component5709;
