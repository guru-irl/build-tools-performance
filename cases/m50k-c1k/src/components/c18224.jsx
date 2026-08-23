import React from 'react';
const LABEL_18224 = 'component_18224';
export function Component18224({ value = 18224, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18224, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18224, 'data-value': derived.doubled }, children);
}
export default Component18224;
