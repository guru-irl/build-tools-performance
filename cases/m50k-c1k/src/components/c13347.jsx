import React from 'react';
const LABEL_13347 = 'component_13347';
export function Component13347({ value = 13347, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13347, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13347, 'data-value': derived.doubled }, children);
}
export default Component13347;
