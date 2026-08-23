import React from 'react';
const LABEL_2903 = 'component_2903';
export function Component2903({ value = 2903, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2903, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2903, 'data-value': derived.doubled }, children);
}
export default Component2903;
