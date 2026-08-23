import React from 'react';
const LABEL_41763 = 'component_41763';
export function Component41763({ value = 41763, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41763, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41763, 'data-value': derived.doubled }, children);
}
export default Component41763;
