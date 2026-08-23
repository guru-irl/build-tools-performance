import React from 'react';
const LABEL_34634 = 'component_34634';
export function Component34634({ value = 34634, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34634, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34634, 'data-value': derived.doubled }, children);
}
export default Component34634;
