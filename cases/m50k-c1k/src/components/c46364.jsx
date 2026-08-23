import React from 'react';
const LABEL_46364 = 'component_46364';
export function Component46364({ value = 46364, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46364, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46364, 'data-value': derived.doubled }, children);
}
export default Component46364;
