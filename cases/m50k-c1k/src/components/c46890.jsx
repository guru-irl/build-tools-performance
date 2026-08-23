import React from 'react';
const LABEL_46890 = 'component_46890';
export function Component46890({ value = 46890, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46890, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46890, 'data-value': derived.doubled }, children);
}
export default Component46890;
