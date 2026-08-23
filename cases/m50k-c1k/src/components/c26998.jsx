import React from 'react';
const LABEL_26998 = 'component_26998';
export function Component26998({ value = 26998, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26998, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26998, 'data-value': derived.doubled }, children);
}
export default Component26998;
