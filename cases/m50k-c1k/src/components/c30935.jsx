import React from 'react';
const LABEL_30935 = 'component_30935';
export function Component30935({ value = 30935, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30935, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30935, 'data-value': derived.doubled }, children);
}
export default Component30935;
