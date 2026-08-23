import React from 'react';
const LABEL_6230 = 'component_6230';
export function Component6230({ value = 6230, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6230, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6230, 'data-value': derived.doubled }, children);
}
export default Component6230;
