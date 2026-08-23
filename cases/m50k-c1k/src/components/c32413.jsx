import React from 'react';
const LABEL_32413 = 'component_32413';
export function Component32413({ value = 32413, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32413, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32413, 'data-value': derived.doubled }, children);
}
export default Component32413;
