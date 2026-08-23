import React from 'react';
const LABEL_19005 = 'component_19005';
export function Component19005({ value = 19005, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19005, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19005, 'data-value': derived.doubled }, children);
}
export default Component19005;
