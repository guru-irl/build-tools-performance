import React from 'react';
const LABEL_7230 = 'component_7230';
export function Component7230({ value = 7230, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7230, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7230, 'data-value': derived.doubled }, children);
}
export default Component7230;
