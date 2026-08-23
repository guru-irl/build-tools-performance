import React from 'react';
const LABEL_13270 = 'component_13270';
export function Component13270({ value = 13270, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13270, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13270, 'data-value': derived.doubled }, children);
}
export default Component13270;
