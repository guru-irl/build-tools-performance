import React from 'react';
const LABEL_31813 = 'component_31813';
export function Component31813({ value = 31813, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_31813, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_31813, 'data-value': derived.doubled }, children);
}
export default Component31813;
