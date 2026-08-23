import React from 'react';
const LABEL_10626 = 'component_10626';
export function Component10626({ value = 10626, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10626, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10626, 'data-value': derived.doubled }, children);
}
export default Component10626;
