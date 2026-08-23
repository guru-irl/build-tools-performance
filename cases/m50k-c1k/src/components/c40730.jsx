import React from 'react';
const LABEL_40730 = 'component_40730';
export function Component40730({ value = 40730, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40730, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40730, 'data-value': derived.doubled }, children);
}
export default Component40730;
