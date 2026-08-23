import React from 'react';
const LABEL_32788 = 'component_32788';
export function Component32788({ value = 32788, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32788, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32788, 'data-value': derived.doubled }, children);
}
export default Component32788;
