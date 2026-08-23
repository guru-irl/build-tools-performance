import React from 'react';
const LABEL_16259 = 'component_16259';
export function Component16259({ value = 16259, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16259, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16259, 'data-value': derived.doubled }, children);
}
export default Component16259;
