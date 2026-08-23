import React from 'react';
const LABEL_14944 = 'component_14944';
export function Component14944({ value = 14944, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14944, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14944, 'data-value': derived.doubled }, children);
}
export default Component14944;
