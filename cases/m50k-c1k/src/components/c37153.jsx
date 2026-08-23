import React from 'react';
const LABEL_37153 = 'component_37153';
export function Component37153({ value = 37153, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37153, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37153, 'data-value': derived.doubled }, children);
}
export default Component37153;
