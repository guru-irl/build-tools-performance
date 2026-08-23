import React from 'react';
const LABEL_44935 = 'component_44935';
export function Component44935({ value = 44935, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44935, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44935, 'data-value': derived.doubled }, children);
}
export default Component44935;
