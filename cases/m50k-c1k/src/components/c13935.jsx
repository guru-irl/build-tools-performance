import React from 'react';
const LABEL_13935 = 'component_13935';
export function Component13935({ value = 13935, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13935, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13935, 'data-value': derived.doubled }, children);
}
export default Component13935;
