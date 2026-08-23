import React from 'react';
const LABEL_935 = 'component_935';
export function Component935({ value = 935, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_935, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_935, 'data-value': derived.doubled }, children);
}
export default Component935;
