import React from 'react';
const LABEL_26312 = 'component_26312';
export function Component26312({ value = 26312, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26312, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26312, 'data-value': derived.doubled }, children);
}
export default Component26312;
