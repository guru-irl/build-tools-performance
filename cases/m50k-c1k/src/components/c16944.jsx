import React from 'react';
const LABEL_16944 = 'component_16944';
export function Component16944({ value = 16944, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16944, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16944, 'data-value': derived.doubled }, children);
}
export default Component16944;
