import React from 'react';
const LABEL_6829 = 'component_6829';
export function Component6829({ value = 6829, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6829, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6829, 'data-value': derived.doubled }, children);
}
export default Component6829;
