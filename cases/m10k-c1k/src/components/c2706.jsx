import React from 'react';
const LABEL_2706 = 'component_2706';
export function Component2706({ value = 2706, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2706, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2706, 'data-value': derived.doubled }, children);
}
export default Component2706;
