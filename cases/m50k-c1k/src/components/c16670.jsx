import React from 'react';
const LABEL_16670 = 'component_16670';
export function Component16670({ value = 16670, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16670, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16670, 'data-value': derived.doubled }, children);
}
export default Component16670;
