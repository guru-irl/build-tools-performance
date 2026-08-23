import React from 'react';
const LABEL_6567 = 'component_6567';
export function Component6567({ value = 6567, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6567, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6567, 'data-value': derived.doubled }, children);
}
export default Component6567;
