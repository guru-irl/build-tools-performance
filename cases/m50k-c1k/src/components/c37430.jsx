import React from 'react';
const LABEL_37430 = 'component_37430';
export function Component37430({ value = 37430, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37430, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37430, 'data-value': derived.doubled }, children);
}
export default Component37430;
