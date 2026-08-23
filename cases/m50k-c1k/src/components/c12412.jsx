import React from 'react';
const LABEL_12412 = 'component_12412';
export function Component12412({ value = 12412, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12412, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12412, 'data-value': derived.doubled }, children);
}
export default Component12412;
