import React from 'react';
const LABEL_16903 = 'component_16903';
export function Component16903({ value = 16903, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16903, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16903, 'data-value': derived.doubled }, children);
}
export default Component16903;
