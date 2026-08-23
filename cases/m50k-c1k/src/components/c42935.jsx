import React from 'react';
const LABEL_42935 = 'component_42935';
export function Component42935({ value = 42935, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42935, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42935, 'data-value': derived.doubled }, children);
}
export default Component42935;
