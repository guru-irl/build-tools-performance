import React from 'react';
const LABEL_45920 = 'component_45920';
export function Component45920({ value = 45920, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45920, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45920, 'data-value': derived.doubled }, children);
}
export default Component45920;
