import React from 'react';
const LABEL_40209 = 'component_40209';
export function Component40209({ value = 40209, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40209, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40209, 'data-value': derived.doubled }, children);
}
export default Component40209;
