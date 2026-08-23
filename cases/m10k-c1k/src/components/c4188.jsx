import React from 'react';
const LABEL_4188 = 'component_4188';
export function Component4188({ value = 4188, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4188, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4188, 'data-value': derived.doubled }, children);
}
export default Component4188;
