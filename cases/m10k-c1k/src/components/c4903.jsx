import React from 'react';
const LABEL_4903 = 'component_4903';
export function Component4903({ value = 4903, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4903, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4903, 'data-value': derived.doubled }, children);
}
export default Component4903;
