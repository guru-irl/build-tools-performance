import React from 'react';
const LABEL_4851 = 'component_4851';
export function Component4851({ value = 4851, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4851, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4851, 'data-value': derived.doubled }, children);
}
export default Component4851;
