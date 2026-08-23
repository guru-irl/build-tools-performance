import React from 'react';
const LABEL_40584 = 'component_40584';
export function Component40584({ value = 40584, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40584, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40584, 'data-value': derived.doubled }, children);
}
export default Component40584;
