import React from 'react';
const LABEL_16380 = 'component_16380';
export function Component16380({ value = 16380, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16380, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16380, 'data-value': derived.doubled }, children);
}
export default Component16380;
