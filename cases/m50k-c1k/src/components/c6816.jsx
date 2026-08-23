import React from 'react';
const LABEL_6816 = 'component_6816';
export function Component6816({ value = 6816, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6816, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6816, 'data-value': derived.doubled }, children);
}
export default Component6816;
