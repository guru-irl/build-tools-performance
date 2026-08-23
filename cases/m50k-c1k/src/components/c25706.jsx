import React from 'react';
const LABEL_25706 = 'component_25706';
export function Component25706({ value = 25706, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25706, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25706, 'data-value': derived.doubled }, children);
}
export default Component25706;
