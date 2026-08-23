import React from 'react';
const LABEL_4231 = 'component_4231';
export function Component4231({ value = 4231, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4231, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4231, 'data-value': derived.doubled }, children);
}
export default Component4231;
