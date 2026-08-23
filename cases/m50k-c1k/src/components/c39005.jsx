import React from 'react';
const LABEL_39005 = 'component_39005';
export function Component39005({ value = 39005, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39005, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39005, 'data-value': derived.doubled }, children);
}
export default Component39005;
