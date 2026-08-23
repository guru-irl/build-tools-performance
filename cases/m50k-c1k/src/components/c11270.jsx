import React from 'react';
const LABEL_11270 = 'component_11270';
export function Component11270({ value = 11270, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11270, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11270, 'data-value': derived.doubled }, children);
}
export default Component11270;
