import React from 'react';
const LABEL_25419 = 'component_25419';
export function Component25419({ value = 25419, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25419, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25419, 'data-value': derived.doubled }, children);
}
export default Component25419;
