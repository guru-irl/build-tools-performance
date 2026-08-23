import React from 'react';
const LABEL_32609 = 'component_32609';
export function Component32609({ value = 32609, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32609, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32609, 'data-value': derived.doubled }, children);
}
export default Component32609;
