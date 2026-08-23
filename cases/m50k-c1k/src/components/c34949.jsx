import React from 'react';
const LABEL_34949 = 'component_34949';
export function Component34949({ value = 34949, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34949, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34949, 'data-value': derived.doubled }, children);
}
export default Component34949;
