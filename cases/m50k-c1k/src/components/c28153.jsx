import React from 'react';
const LABEL_28153 = 'component_28153';
export function Component28153({ value = 28153, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28153, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28153, 'data-value': derived.doubled }, children);
}
export default Component28153;
