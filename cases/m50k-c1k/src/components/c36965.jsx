import React from 'react';
const LABEL_36965 = 'component_36965';
export function Component36965({ value = 36965, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36965, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36965, 'data-value': derived.doubled }, children);
}
export default Component36965;
