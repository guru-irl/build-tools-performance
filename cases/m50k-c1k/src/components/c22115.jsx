import React from 'react';
const LABEL_22115 = 'component_22115';
export function Component22115({ value = 22115, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22115, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22115, 'data-value': derived.doubled }, children);
}
export default Component22115;
