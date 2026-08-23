import React from 'react';
const LABEL_25645 = 'component_25645';
export function Component25645({ value = 25645, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25645, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25645, 'data-value': derived.doubled }, children);
}
export default Component25645;
