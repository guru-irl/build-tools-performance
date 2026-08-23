import React from 'react';
const LABEL_38681 = 'component_38681';
export function Component38681({ value = 38681, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38681, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38681, 'data-value': derived.doubled }, children);
}
export default Component38681;
