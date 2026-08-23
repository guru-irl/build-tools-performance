import React from 'react';
const LABEL_14851 = 'component_14851';
export function Component14851({ value = 14851, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14851, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14851, 'data-value': derived.doubled }, children);
}
export default Component14851;
