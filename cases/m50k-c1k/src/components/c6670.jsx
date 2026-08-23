import React from 'react';
const LABEL_6670 = 'component_6670';
export function Component6670({ value = 6670, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6670, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6670, 'data-value': derived.doubled }, children);
}
export default Component6670;
