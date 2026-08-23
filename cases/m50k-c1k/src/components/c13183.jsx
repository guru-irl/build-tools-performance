import React from 'react';
const LABEL_13183 = 'component_13183';
export function Component13183({ value = 13183, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13183, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13183, 'data-value': derived.doubled }, children);
}
export default Component13183;
