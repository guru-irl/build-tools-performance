import React from 'react';
const LABEL_12022 = 'component_12022';
export function Component12022({ value = 12022, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12022, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12022, 'data-value': derived.doubled }, children);
}
export default Component12022;
