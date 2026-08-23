import React from 'react';
const LABEL_16199 = 'component_16199';
export function Component16199({ value = 16199, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16199, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16199, 'data-value': derived.doubled }, children);
}
export default Component16199;
