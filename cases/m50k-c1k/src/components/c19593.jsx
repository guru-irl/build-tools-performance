import React from 'react';
const LABEL_19593 = 'component_19593';
export function Component19593({ value = 19593, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19593, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19593, 'data-value': derived.doubled }, children);
}
export default Component19593;
