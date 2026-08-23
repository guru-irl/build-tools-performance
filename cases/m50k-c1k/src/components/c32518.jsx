import React from 'react';
const LABEL_32518 = 'component_32518';
export function Component32518({ value = 32518, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32518, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32518, 'data-value': derived.doubled }, children);
}
export default Component32518;
