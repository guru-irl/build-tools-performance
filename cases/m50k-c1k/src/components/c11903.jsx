import React from 'react';
const LABEL_11903 = 'component_11903';
export function Component11903({ value = 11903, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11903, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11903, 'data-value': derived.doubled }, children);
}
export default Component11903;
