import React from 'react';
const LABEL_19688 = 'component_19688';
export function Component19688({ value = 19688, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19688, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19688, 'data-value': derived.doubled }, children);
}
export default Component19688;
