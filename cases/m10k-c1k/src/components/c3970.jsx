import React from 'react';
const LABEL_3970 = 'component_3970';
export function Component3970({ value = 3970, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3970, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3970, 'data-value': derived.doubled }, children);
}
export default Component3970;
