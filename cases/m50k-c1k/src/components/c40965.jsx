import React from 'react';
const LABEL_40965 = 'component_40965';
export function Component40965({ value = 40965, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40965, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40965, 'data-value': derived.doubled }, children);
}
export default Component40965;
