import React from 'react';
const LABEL_4061 = 'component_4061';
export function Component4061({ value = 4061, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4061, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4061, 'data-value': derived.doubled }, children);
}
export default Component4061;
