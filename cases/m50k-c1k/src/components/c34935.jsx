import React from 'react';
const LABEL_34935 = 'component_34935';
export function Component34935({ value = 34935, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34935, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34935, 'data-value': derived.doubled }, children);
}
export default Component34935;
