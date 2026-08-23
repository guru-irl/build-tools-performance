import React from 'react';
const LABEL_6970 = 'component_6970';
export function Component6970({ value = 6970, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6970, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6970, 'data-value': derived.doubled }, children);
}
export default Component6970;
