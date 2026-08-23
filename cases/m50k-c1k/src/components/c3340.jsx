import React from 'react';
const LABEL_3340 = 'component_3340';
export function Component3340({ value = 3340, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3340, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3340, 'data-value': derived.doubled }, children);
}
export default Component3340;
