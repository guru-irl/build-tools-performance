import React from 'react';
const LABEL_46747 = 'component_46747';
export function Component46747({ value = 46747, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46747, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46747, 'data-value': derived.doubled }, children);
}
export default Component46747;
