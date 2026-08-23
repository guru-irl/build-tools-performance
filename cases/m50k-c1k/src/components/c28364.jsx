import React from 'react';
const LABEL_28364 = 'component_28364';
export function Component28364({ value = 28364, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28364, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28364, 'data-value': derived.doubled }, children);
}
export default Component28364;
