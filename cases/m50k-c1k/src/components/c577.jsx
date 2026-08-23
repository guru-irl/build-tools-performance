import React from 'react';
const LABEL_577 = 'component_577';
export function Component577({ value = 577, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_577, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_577, 'data-value': derived.doubled }, children);
}
export default Component577;
