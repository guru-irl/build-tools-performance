import React from 'react';
const LABEL_37225 = 'component_37225';
export function Component37225({ value = 37225, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37225, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37225, 'data-value': derived.doubled }, children);
}
export default Component37225;
