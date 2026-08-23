import React from 'react';
const LABEL_4677 = 'component_4677';
export function Component4677({ value = 4677, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4677, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4677, 'data-value': derived.doubled }, children);
}
export default Component4677;
