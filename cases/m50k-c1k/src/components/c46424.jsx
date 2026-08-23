import React from 'react';
const LABEL_46424 = 'component_46424';
export function Component46424({ value = 46424, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46424, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46424, 'data-value': derived.doubled }, children);
}
export default Component46424;
