import React from 'react';
const LABEL_32563 = 'component_32563';
export function Component32563({ value = 32563, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32563, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32563, 'data-value': derived.doubled }, children);
}
export default Component32563;
