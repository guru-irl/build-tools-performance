import React from 'react';
const LABEL_40570 = 'component_40570';
export function Component40570({ value = 40570, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40570, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40570, 'data-value': derived.doubled }, children);
}
export default Component40570;
