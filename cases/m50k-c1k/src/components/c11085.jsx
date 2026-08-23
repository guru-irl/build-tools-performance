import React from 'react';
const LABEL_11085 = 'component_11085';
export function Component11085({ value = 11085, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11085, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11085, 'data-value': derived.doubled }, children);
}
export default Component11085;
