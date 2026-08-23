import React from 'react';
const LABEL_40183 = 'component_40183';
export function Component40183({ value = 40183, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40183, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40183, 'data-value': derived.doubled }, children);
}
export default Component40183;
