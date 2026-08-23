import React from 'react';
const LABEL_20627 = 'component_20627';
export function Component20627({ value = 20627, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20627, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20627, 'data-value': derived.doubled }, children);
}
export default Component20627;
