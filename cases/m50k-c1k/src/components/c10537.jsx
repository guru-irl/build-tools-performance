import React from 'react';
const LABEL_10537 = 'component_10537';
export function Component10537({ value = 10537, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10537, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10537, 'data-value': derived.doubled }, children);
}
export default Component10537;
