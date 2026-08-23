import React from 'react';
const LABEL_34221 = 'component_34221';
export function Component34221({ value = 34221, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34221, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34221, 'data-value': derived.doubled }, children);
}
export default Component34221;
