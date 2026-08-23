import React from 'react';
const LABEL_7936 = 'component_7936';
export function Component7936({ value = 7936, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7936, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7936, 'data-value': derived.doubled }, children);
}
export default Component7936;
