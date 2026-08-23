import React from 'react';
const LABEL_32670 = 'component_32670';
export function Component32670({ value = 32670, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32670, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32670, 'data-value': derived.doubled }, children);
}
export default Component32670;
