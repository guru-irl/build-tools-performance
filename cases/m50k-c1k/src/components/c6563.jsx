import React from 'react';
const LABEL_6563 = 'component_6563';
export function Component6563({ value = 6563, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6563, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6563, 'data-value': derived.doubled }, children);
}
export default Component6563;
