import React from 'react';
const LABEL_28144 = 'component_28144';
export function Component28144({ value = 28144, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28144, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28144, 'data-value': derived.doubled }, children);
}
export default Component28144;
