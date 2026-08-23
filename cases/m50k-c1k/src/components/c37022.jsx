import React from 'react';
const LABEL_37022 = 'component_37022';
export function Component37022({ value = 37022, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37022, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37022, 'data-value': derived.doubled }, children);
}
export default Component37022;
