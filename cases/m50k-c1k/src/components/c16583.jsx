import React from 'react';
const LABEL_16583 = 'component_16583';
export function Component16583({ value = 16583, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16583, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16583, 'data-value': derived.doubled }, children);
}
export default Component16583;
