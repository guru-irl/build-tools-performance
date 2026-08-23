import React from 'react';
const LABEL_13424 = 'component_13424';
export function Component13424({ value = 13424, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13424, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13424, 'data-value': derived.doubled }, children);
}
export default Component13424;
