import React from 'react';
const LABEL_37166 = 'component_37166';
export function Component37166({ value = 37166, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37166, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37166, 'data-value': derived.doubled }, children);
}
export default Component37166;
