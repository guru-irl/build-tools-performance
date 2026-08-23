import React from 'react';
const LABEL_18660 = 'component_18660';
export function Component18660({ value = 18660, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18660, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18660, 'data-value': derived.doubled }, children);
}
export default Component18660;
