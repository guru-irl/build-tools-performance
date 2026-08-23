import React from 'react';
const LABEL_6191 = 'component_6191';
export function Component6191({ value = 6191, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6191, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6191, 'data-value': derived.doubled }, children);
}
export default Component6191;
