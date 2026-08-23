import React from 'react';
const LABEL_20851 = 'component_20851';
export function Component20851({ value = 20851, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20851, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20851, 'data-value': derived.doubled }, children);
}
export default Component20851;
