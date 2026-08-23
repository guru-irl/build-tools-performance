import React from 'react';
const LABEL_458 = 'component_458';
export function Component458({ value = 458, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_458, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_458, 'data-value': derived.doubled }, children);
}
export default Component458;
