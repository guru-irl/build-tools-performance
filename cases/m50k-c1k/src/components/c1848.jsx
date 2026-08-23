import React from 'react';
const LABEL_1848 = 'component_1848';
export function Component1848({ value = 1848, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1848, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1848, 'data-value': derived.doubled }, children);
}
export default Component1848;
