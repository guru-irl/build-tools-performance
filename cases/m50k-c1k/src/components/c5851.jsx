import React from 'react';
const LABEL_5851 = 'component_5851';
export function Component5851({ value = 5851, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5851, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5851, 'data-value': derived.doubled }, children);
}
export default Component5851;
