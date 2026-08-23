import React from 'react';
const LABEL_11851 = 'component_11851';
export function Component11851({ value = 11851, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11851, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11851, 'data-value': derived.doubled }, children);
}
export default Component11851;
