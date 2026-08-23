import React from 'react';
const LABEL_8935 = 'component_8935';
export function Component8935({ value = 8935, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8935, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8935, 'data-value': derived.doubled }, children);
}
export default Component8935;
