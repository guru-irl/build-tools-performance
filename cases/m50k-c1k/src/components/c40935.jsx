import React from 'react';
const LABEL_40935 = 'component_40935';
export function Component40935({ value = 40935, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40935, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40935, 'data-value': derived.doubled }, children);
}
export default Component40935;
