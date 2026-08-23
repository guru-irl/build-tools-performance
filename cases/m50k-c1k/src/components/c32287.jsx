import React from 'react';
const LABEL_32287 = 'component_32287';
export function Component32287({ value = 32287, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32287, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32287, 'data-value': derived.doubled }, children);
}
export default Component32287;
