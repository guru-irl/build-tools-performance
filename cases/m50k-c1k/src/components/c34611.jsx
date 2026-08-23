import React from 'react';
const LABEL_34611 = 'component_34611';
export function Component34611({ value = 34611, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34611, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34611, 'data-value': derived.doubled }, children);
}
export default Component34611;
