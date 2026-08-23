import React from 'react';
const LABEL_41645 = 'component_41645';
export function Component41645({ value = 41645, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41645, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41645, 'data-value': derived.doubled }, children);
}
export default Component41645;
