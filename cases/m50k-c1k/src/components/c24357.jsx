import React from 'react';
const LABEL_24357 = 'component_24357';
export function Component24357({ value = 24357, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24357, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24357, 'data-value': derived.doubled }, children);
}
export default Component24357;
