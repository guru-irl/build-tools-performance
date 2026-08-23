import React from 'react';
const LABEL_584 = 'component_584';
export function Component584({ value = 584, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_584, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_584, 'data-value': derived.doubled }, children);
}
export default Component584;
