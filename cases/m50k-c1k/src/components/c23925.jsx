import React from 'react';
const LABEL_23925 = 'component_23925';
export function Component23925({ value = 23925, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23925, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23925, 'data-value': derived.doubled }, children);
}
export default Component23925;
