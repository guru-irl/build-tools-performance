import React from 'react';
const LABEL_37970 = 'component_37970';
export function Component37970({ value = 37970, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37970, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37970, 'data-value': derived.doubled }, children);
}
export default Component37970;
