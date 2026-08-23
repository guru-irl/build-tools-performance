import React from 'react';
const LABEL_32420 = 'component_32420';
export function Component32420({ value = 32420, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32420, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32420, 'data-value': derived.doubled }, children);
}
export default Component32420;
