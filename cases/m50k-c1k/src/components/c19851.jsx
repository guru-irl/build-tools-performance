import React from 'react';
const LABEL_19851 = 'component_19851';
export function Component19851({ value = 19851, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19851, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19851, 'data-value': derived.doubled }, children);
}
export default Component19851;
