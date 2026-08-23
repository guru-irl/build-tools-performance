import React from 'react';
const LABEL_851 = 'component_851';
export function Component851({ value = 851, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_851, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_851, 'data-value': derived.doubled }, children);
}
export default Component851;
