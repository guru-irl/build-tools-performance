import React from 'react';
const LABEL_24875 = 'component_24875';
export function Component24875({ value = 24875, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24875, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24875, 'data-value': derived.doubled }, children);
}
export default Component24875;
