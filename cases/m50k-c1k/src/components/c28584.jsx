import React from 'react';
const LABEL_28584 = 'component_28584';
export function Component28584({ value = 28584, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28584, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28584, 'data-value': derived.doubled }, children);
}
export default Component28584;
