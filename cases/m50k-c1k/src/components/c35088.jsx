import React from 'react';
const LABEL_35088 = 'component_35088';
export function Component35088({ value = 35088, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35088, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35088, 'data-value': derived.doubled }, children);
}
export default Component35088;
