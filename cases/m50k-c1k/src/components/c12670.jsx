import React from 'react';
const LABEL_12670 = 'component_12670';
export function Component12670({ value = 12670, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12670, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12670, 'data-value': derived.doubled }, children);
}
export default Component12670;
