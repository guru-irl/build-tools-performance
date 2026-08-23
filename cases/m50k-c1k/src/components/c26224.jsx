import React from 'react';
const LABEL_26224 = 'component_26224';
export function Component26224({ value = 26224, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26224, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26224, 'data-value': derived.doubled }, children);
}
export default Component26224;
