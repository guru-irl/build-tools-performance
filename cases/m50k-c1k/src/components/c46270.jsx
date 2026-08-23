import React from 'react';
const LABEL_46270 = 'component_46270';
export function Component46270({ value = 46270, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46270, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46270, 'data-value': derived.doubled }, children);
}
export default Component46270;
