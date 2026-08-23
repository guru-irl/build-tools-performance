import React from 'react';
const LABEL_34584 = 'component_34584';
export function Component34584({ value = 34584, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34584, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34584, 'data-value': derived.doubled }, children);
}
export default Component34584;
