import React from 'react';
const LABEL_5420 = 'component_5420';
export function Component5420({ value = 5420, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5420, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5420, 'data-value': derived.doubled }, children);
}
export default Component5420;
