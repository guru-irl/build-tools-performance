import React from 'react';
const LABEL_4688 = 'component_4688';
export function Component4688({ value = 4688, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4688, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4688, 'data-value': derived.doubled }, children);
}
export default Component4688;
