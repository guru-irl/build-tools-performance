import React from 'react';
const LABEL_19920 = 'component_19920';
export function Component19920({ value = 19920, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19920, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19920, 'data-value': derived.doubled }, children);
}
export default Component19920;
